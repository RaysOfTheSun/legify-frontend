import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { withLatestFrom, map, tap, concatMap, first } from 'rxjs/operators';
import { LegifyDocument } from '../../models';
import { ApplyService, ConsumerDataService } from '../../../../services';
import { SUPPORTING_DOC_TYPE } from '../../constants';
import { ApplyDocumentsConfigService } from '../apply-documents-config/apply-documents-config.service';
import { ApplyDocumentsCreatorService } from '../apply-documents-creator/apply-documents-creator.service';
import { ApplyDocumentsDataService } from '../apply-documents-data/apply-documents-data.service';
import { ApplyDocumentsProgessService } from '../apply-documents-progress/apply-documents-progess.service';
import { Customer, ApplicationProgress, RequiredDocument } from '../../../../models';
import { PaymentMethod } from '../../../../constants';

@Injectable()
export class ApplyDocumentsService {
  protected readonly allDocumentsSubj: BehaviorSubject<LegifyDocument[]> = new BehaviorSubject([]);

  constructor(
    protected applyService: ApplyService,
    protected consumerDataService: ConsumerDataService,
    protected documentCreatorService: ApplyDocumentsCreatorService,
    protected documentsProgressService: ApplyDocumentsProgessService,
    protected applyDocumentsDataService: ApplyDocumentsDataService,
    protected applyDocumentsConfigService: ApplyDocumentsConfigService
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

  public getDocumentRequirementsForCustomer(customer: Customer): Observable<RequiredDocument[]> {
    return this.applyDocumentsConfigService.requiredDocuments$.pipe(
      withLatestFrom(this.applyService.currApplication$),
      map(([requiredDocs, currApplication]) => {
        const requiredDocsForCustomer: RequiredDocument[] = [];

        const paymentDocReqType =
          currApplication.paymentInfo.method === PaymentMethod.ONLINE
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
    documentRequirement: RequiredDocument,
    deferUpdate = false
  ): Observable<LegifyDocument> {
    const uploadDocumentAndSave$ = this.documentCreatorService
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
    documentRequirement: RequiredDocument
  ): Observable<LegifyDocument> {
    return this.uploadDocument(rawFile, documentOwner, documentRequirement, true).pipe(
      first(),
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
