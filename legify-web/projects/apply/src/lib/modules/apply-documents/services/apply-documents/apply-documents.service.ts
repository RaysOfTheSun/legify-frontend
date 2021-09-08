import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { withLatestFrom, map, tap, take, concatMap } from 'rxjs/operators';
import { ApplyService, ConsumerDataService } from '../../../../services';
import { SUPPORTING_DOC_TYPE } from '../../constants';
import { ApplyDocumentsConfigService } from '../apply-documents-config/apply-documents-config.service';
import { ApplyDocumentsProgessService } from '../apply-documents-progress/apply-documents-progess.service';
import { Customer, ApplicationProgress, RequiredDocument, LegifyApplication } from '../../../../models';
import { PaymentMethod } from '../../../../constants';
import { ApplyDocumentUploadDataProviderService } from '../../../apply-document-upload';

@Injectable()
export class ApplyDocumentsService {
  constructor(
    protected applyService: ApplyService,
    protected consumerDataService: ConsumerDataService,
    protected documentsProgressService: ApplyDocumentsProgessService,
    protected applyDocumentsConfigService: ApplyDocumentsConfigService,

    protected applyDocumentUploadDataProviderService: ApplyDocumentUploadDataProviderService
  ) {}

  public updateProgressForPersonAndModule(consumer: Customer): Observable<LegifyApplication> {
    return combineLatest([
      this.applyService.getCurrApplication(),
      this.getDocumentRequirementsForCustomer(consumer),
      this.getAllCustomersThatWillUploadDocuments(),
      this.applyDocumentUploadDataProviderService.getAllValidDocumentsByOwnerId(consumer.id)
    ]).pipe(
      map(([currApplication, requiredDocuments, allPersonsThatWillUploadDocuments, allDocumentsForPerson]) => {
        const updatedProgressForPerson = this.documentsProgressService.calculateProgressForPerson(
          allDocumentsForPerson,
          requiredDocuments
        );

        return this.documentsProgressService.updateModuleProgressAndChunks(
          currApplication,
          consumer.id,
          updatedProgressForPerson,
          allPersonsThatWillUploadDocuments.length
        );
      }),
      concatMap((updatedModuleProgress) => this.applyService.updateCurrApplicationProgressInfo(updatedModuleProgress))
    );
  }

  public getAllCustomersThatWillUploadDocuments(): Observable<Customer[]> {
    return this.applyService.getCurrApplication().pipe(
      map((application) => {
        return application ? this.consumerDataService.getAllInsuredPersonsFromApplication(application) : [];
      })
    );
  }

  public getDocumentRequirementsForCustomer(customer: Customer): Observable<RequiredDocument[]> {
    return this.applyDocumentsConfigService.requiredDocuments$.pipe(
      withLatestFrom(this.applyService.getCurrApplication()),
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
}
