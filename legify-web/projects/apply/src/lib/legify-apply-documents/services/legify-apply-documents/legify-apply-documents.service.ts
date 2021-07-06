import { Injectable } from '@angular/core';
import { TaskCardConfig } from '@legify/web-ui-elements';
import { combineLatest, Observable } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
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
import { PERSON_ROLE } from '../../../constants';
import { APPLICATION_PAYMENT_METHOD } from '../../../constants/application-payment-info-method-eum';
import { SUPPORTING_DOC_TYPE } from '../../constants';

@Injectable()
export class LegifyApplyDocumentsService {
  constructor(
    protected applyService: LegifyApplyService,
    protected applyDataService: LegifyApplyDataService,
    protected applyPersonMapperService: LegifyApplyPersonMapperService,
    protected applyDocumentsConfigService: LegifyApplyDocumentsConfigService
  ) {}

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
}
