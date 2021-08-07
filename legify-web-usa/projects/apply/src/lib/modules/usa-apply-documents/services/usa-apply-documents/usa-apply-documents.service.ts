import { Injectable } from '@angular/core';
import {
  Customer,
  ApplyService,
  ApplyHttpDataService,
  LegifyDocumentRequirement,
  ApplyDocumentsService,
  ConsumerDataService,
  ApplyDocumentsDataService,
  ApplyDocumentsConfigService,
  ApplyDocumentsCreatorService,
  ApplyDocumentsProgessService
} from '@legify/web-apply';
import { Observable } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { UsaLegifyApplication } from '../../../../models';
import { USA_SUPPORTING_DOC_TYPE_GROUP } from '../../constants';

@Injectable()
export class UsaApplyDocumentsService extends ApplyDocumentsService {
  constructor(
    protected applyService: ApplyService<UsaLegifyApplication>,
    protected applyDataService: ApplyHttpDataService,
    protected applyDocumentsCreatorService: ApplyDocumentsCreatorService,
    protected documentsProgressService: ApplyDocumentsProgessService,
    protected consumerDataService: ConsumerDataService,
    protected applyDocumentsDataService: ApplyDocumentsDataService,
    protected applyDocumentsConfigService: ApplyDocumentsConfigService
  ) {
    super(
      applyService,
      consumerDataService,
      applyDocumentsCreatorService,
      documentsProgressService,
      applyDocumentsDataService,
      applyDocumentsConfigService
    );
  }

  public getDocumentRequirementsForCustomer(
    customer: Customer
  ): Observable<LegifyDocumentRequirement[]> {
    return super.getDocumentRequirementsForCustomer(customer).pipe(
      withLatestFrom(
        this.applyService.currApplication$,
        this.applyDocumentsConfigService.requiredDocuments$
      ),
      map(([coreRequiredDocs, currApplication, requiredDocConfigs]) => {
        if (!currApplication.isVirtual) {
          return coreRequiredDocs;
        }

        const requiredDocs = [...coreRequiredDocs];

        const customerSelfieReqs = requiredDocConfigs.filter(
          (config) =>
            config.documentGroup ===
              USA_SUPPORTING_DOC_TYPE_GROUP.CUSTOMER_SELFIES &&
            config.forRoles.includes(customer.role)
        );

        requiredDocs.push(...customerSelfieReqs);

        return requiredDocs;
      })
    );
  }
}
