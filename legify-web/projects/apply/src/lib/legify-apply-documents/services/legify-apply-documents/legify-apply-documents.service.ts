import { Injectable } from '@angular/core';
import { TaskCardConfig } from '@legify/web-ui-elements';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { concatMap, map, take, withLatestFrom } from 'rxjs/operators';
import {
  LegifyDocumentRequirement,
  LegifyDocumentRequirementConfig,
  Person
} from '../../../models';
import {
  LegifyApplyService,
  LegifyApplyDataService,
  LegifyApplyPersonMapperService
} from '../../../services';
import { LegifyApplyDocumentsConfigService } from '../legify-apply-documents-config/legify-apply-documents-config.service';
import { get } from 'lodash-es';
import { APPLICATION_PAYMENT_METHOD } from '../../../constants/application-payment-info-method-eum';
import { SUPPORTING_DOC_TYPE } from '../../constants';
import {
  DocumentPreviewActionEvent,
  DocumentUploadEvent,
  LegifyDocument
} from '../../models';
import { LegifyApplyDocumentsDocumentMapperService } from '../legify-apply-documents-document-mapper/legify-apply-documents-document-mapper.service';

@Injectable()
export class LegifyApplyDocumentsService {
  protected readonly allDocumentsSubj: BehaviorSubject<LegifyDocument[]> =
    new BehaviorSubject([]);

  constructor(
    protected applyService: LegifyApplyService,
    protected applyDataService: LegifyApplyDataService,
    protected documentMapperService: LegifyApplyDocumentsDocumentMapperService,
    protected applyPersonMapperService: LegifyApplyPersonMapperService,
    protected applyDocumentsConfigService: LegifyApplyDocumentsConfigService
  ) {}

  get allDocuments$(): Observable<LegifyDocument[]> {
    return this.allDocumentsSubj.asObservable();
  }

  public getAllPersonsThatWillUploadDocuments(): Observable<Person[]> {
    return this.applyService.currApplication$.pipe(
      map((application) => {
        return application
          ? this.applyDataService.getAllInsuredPersonsFromApplication(
              application
            )
          : [];
      })
    );
  }

  public getDocumentRequirementsForPerson(
    person: Person
  ): Observable<LegifyDocumentRequirement[]> {
    return this.applyDocumentsConfigService.requiredDocuments$.pipe(
      withLatestFrom(this.applyService.currApplication$),
      map(([requiredDocs, currApplication]) => {
        const requiredDocsForPerson: LegifyDocumentRequirementConfig[] = [];

        const paymentDocReqType =
          currApplication.paymentInfo.method ===
          APPLICATION_PAYMENT_METHOD.ONLINE
            ? SUPPORTING_DOC_TYPE.PAYMENT_RECEIPT
            : SUPPORTING_DOC_TYPE.BANKSLIP;

        const identificationDocReq = requiredDocs.find(
          (reqDoc) => reqDoc.documentType === person.identificationInfo.type
        );

        const paymentInfoDocReq = requiredDocs.find(
          (reqDoc) => reqDoc.documentType === paymentDocReqType
        );

        requiredDocsForPerson.push(identificationDocReq, paymentInfoDocReq);

        return requiredDocsForPerson.filter((typeConfig) =>
          typeConfig.forRoles.includes(person.role)
        );
      })
    );
  }

  public getTaskCardConfigs(): Observable<TaskCardConfig[]> {
    return combineLatest([
      this.applyDocumentsConfigService.taskCardRowConfigs,
      this.getAllPersonsThatWillUploadDocuments()
    ]).pipe(
      map(([taskCardRowConfigs, persons]) => {
        return persons.map((person, i) => {
          return {
            headerText: this.applyPersonMapperService.getPersonName(person),
            subHeaderText: `PERSON_${person.role}`,
            highlightColorKey: get(person, 'role'),
            rows: taskCardRowConfigs
          } as TaskCardConfig;
        });
      })
    );
  }

  public uploadFile({
    owner,
    rawFile,
    documentRequirementMeta
  }: DocumentUploadEvent): void {
    this.documentMapperService
      .convertRawFileToLegifyDocument(rawFile, owner, documentRequirementMeta)
      .pipe(take(1), withLatestFrom(this.allDocuments$))
      .subscribe(([legifyDocument, allDocuments]) => {
        const updatedAllDocuments = [...allDocuments];
        updatedAllDocuments.push(legifyDocument);

        this.allDocumentsSubj.next(updatedAllDocuments);
      });
  }

  public reuploadFile(
    replacementFile: File,
    documentOwner: Person,
    documentToReplace: LegifyDocument,
    documentRequirement: LegifyDocumentRequirement
  ): void {
    this.documentMapperService
      .convertRawFileToLegifyDocument(
        replacementFile,
        documentOwner,
        documentRequirement
      )
      .pipe(take(1), withLatestFrom(this.allDocuments$))
      .subscribe(([legifyDocument, allDocuments]) => {
        const indexOfDocToReplace = allDocuments.findIndex(
          (doc) => doc.documentId === documentToReplace.documentId
        );

        const updatedAllDocuments = [...allDocuments];
        updatedAllDocuments.splice(indexOfDocToReplace, 1, legifyDocument);

        this.allDocumentsSubj.next(updatedAllDocuments);
      });
  }

  public deleteDocument(legifyDocument: LegifyDocument): void {
    this.allDocuments$
      .pipe(
        map((allDocuments) =>
          allDocuments.filter(
            (document) => document.documentId !== legifyDocument.documentId
          )
        ),
        take(1)
      )
      .subscribe((updatedDocList) =>
        this.allDocumentsSubj.next(updatedDocList)
      );
  }
}
