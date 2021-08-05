import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { concatMap, map, take, tap, withLatestFrom } from 'rxjs/operators';
import { LegifyDocumentRequirement, LegifyDocumentRequirementConfig } from '../../../models';
import { ApplyService } from '../../../services';
import { LegifyApplyDocumentsConfigService } from '../legify-apply-documents-config/legify-apply-documents-config.service';
import { APPLICATION_PAYMENT_METHOD } from '../../../constants/application-payment-info-method-eum';
import { SUPPORTING_DOC_TYPE } from '../../constants';
import { LegifyDocument } from '../../models';
import { LegifyApplyDocumentsDocumentMapperService } from '../legify-apply-documents-document-mapper/legify-apply-documents-document-mapper.service';
import { LegifyApplyDocumentsProgressService } from '../legify-apply-documents-progress/legify-apply-documents-progress.service';
import { LegifyApplyDocumentsDataService } from '../legify-apply-documents-data/legify-apply-documents-data.service';
import { ApplicationProgress } from '../../../models/application/application-progress/application-progress';
import { Customer } from '../../../models/customer/customer';
import { ConsumerDataService } from '../../../services/consumer-data/consumer-data.service';

@Injectable()
export class LegifyApplyDocumentsService {
  protected readonly allDocumentsSubj: BehaviorSubject<LegifyDocument[]> = new BehaviorSubject([]);

  constructor(
    protected applyService: ApplyService,
    protected consumerDataService: ConsumerDataService,
    protected documentMapperService: LegifyApplyDocumentsDocumentMapperService,
    protected documentsProgressService: LegifyApplyDocumentsProgressService,
    protected applyDocumentsDataService: LegifyApplyDocumentsDataService,
    protected applyDocumentsConfigService: LegifyApplyDocumentsConfigService
  ) {}

  get allDocuments$(): Observable<LegifyDocument[]> {
    return this.allDocumentsSubj.asObservable();
  }

  protected updateOverallModuleProgress(documentOwner: Customer): Observable<ApplicationProgress[]> {
    return this.allDocuments$.pipe(
      withLatestFrom(
        this.applyService.currApplication$,
        this.getDocumentRequirementsForCustomer(documentOwner),
        this.getAllCustomersThatWillUploadDocuments()
      ),
      map(([allDocuments, currApplication, allDocumentRequirements, allPersonsThatWillUpload]) => {
        const allDocumentsForPerson = this.applyDocumentsDataService.getDocumentsByOnwerId(
          documentOwner.id,
          allDocuments
        );

        const progressForOwner = this.documentsProgressService.calculateProgressForPerson(
          allDocumentsForPerson,
          allDocumentRequirements
        );

        const updatedProgressInfo = this.documentsProgressService.updateModuleProgressAndChunks(
          currApplication,
          documentOwner.id,
          progressForOwner,
          allPersonsThatWillUpload.length
        );

        this.applyService.updateCurrApplicationProgressInfo(updatedProgressInfo);

        return updatedProgressInfo;
      })
    );
  }

  public getAllCustomersThatWillUploadDocuments(): Observable<Customer[]> {
    return this.applyService.currApplication$.pipe(
      map((application) => {
        return application ? this.consumerDataService.getAllInsuredPersonsFromApplication(application) : [];
      })
    );
  }

  public getDocumentRequirementsForCustomer(customer: Customer): Observable<LegifyDocumentRequirement[]> {
    return this.applyDocumentsConfigService.requiredDocuments$.pipe(
      withLatestFrom(this.applyService.currApplication$),
      map(([requiredDocs, currApplication]) => {
        const requiredDocsForCustomer: LegifyDocumentRequirementConfig[] = [];

        const paymentDocReqType =
          currApplication.paymentInfo.method === APPLICATION_PAYMENT_METHOD.ONLINE
            ? SUPPORTING_DOC_TYPE.PAYMENT_RECEIPT
            : SUPPORTING_DOC_TYPE.BANKSLIP;

        const identificationDocReq = requiredDocs.find(
          (reqDoc) => reqDoc.documentType === customer.identificationInfo.type
        );

        const paymentInfoDocReq = requiredDocs.find((reqDoc) => reqDoc.documentType === paymentDocReqType);

        requiredDocsForCustomer.push(identificationDocReq, paymentInfoDocReq);

        return requiredDocsForCustomer.filter((typeConfig) => typeConfig.forRoles.includes(customer.role));
      })
    );
  }

  public uploadDocument(
    rawFile: File,
    documentOwner: Customer,
    documentRequirement: LegifyDocumentRequirement,
    deferUpdate = false
  ): Observable<LegifyDocument> {
    const uploadDocumentAndSave$ = this.documentMapperService
      .convertRawFileToLegifyDocument(rawFile, documentOwner, documentRequirement)
      .pipe(
        withLatestFrom(this.allDocuments$),
        tap(([legifyDocument, allDocuments]) => {
          if (deferUpdate) {
            return;
          }

          const updatedAllFiles = [...allDocuments];
          updatedAllFiles.push(legifyDocument);
          this.allDocumentsSubj.next(updatedAllFiles);
        }),
        map(([legfiyDocument, _]) => legfiyDocument)
      );

    const updateModuleProgress$ = this.updateOverallModuleProgress(documentOwner);

    return uploadDocumentAndSave$.pipe(
      concatMap((legifyDocument) => updateModuleProgress$.pipe(map(() => legifyDocument)))
    );
  }

  public reuploadDocument(
    rawFile: File,
    documentOwner: Customer,
    documentToReplace: LegifyDocument,
    documentRequirement: LegifyDocumentRequirement
  ): Observable<LegifyDocument> {
    return this.uploadDocument(rawFile, documentOwner, documentRequirement, true).pipe(
      take(1),
      withLatestFrom(this.allDocuments$),
      tap(([legifyDocument, allDocuments]) => {
        const indexOfDocToReplace = allDocuments.findIndex((doc) => doc.documentId === documentToReplace.documentId);

        const updatedAllDocuments = [...allDocuments];
        updatedAllDocuments.splice(indexOfDocToReplace, 1, legifyDocument);

        this.allDocumentsSubj.next(updatedAllDocuments);
      }),
      map(([legifyDocument, _]) => {
        return legifyDocument;
      })
    );
  }

  public deleteDocument(legifyDocument: LegifyDocument, documentOwner: Customer): Observable<LegifyDocument> {
    const deleteDocument$ = this.allDocuments$.pipe(
      map((allDocuments) => allDocuments.filter((document) => document.documentId !== legifyDocument.documentId)),
      tap((updatedAllDocuments) => this.allDocumentsSubj.next(updatedAllDocuments))
    );

    const updateProgress$ = this.updateOverallModuleProgress(documentOwner);

    return deleteDocument$.pipe(
      concatMap(() => updateProgress$),
      map(() => legifyDocument)
    );
  }
}
