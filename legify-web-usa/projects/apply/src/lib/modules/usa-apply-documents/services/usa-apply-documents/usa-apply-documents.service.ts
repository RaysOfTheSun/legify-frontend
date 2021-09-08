import { Injectable } from '@angular/core';
import {
  Customer,
  RequiredDocument,
  ApplyDocumentsService
} from '@legify/web-apply';
import { Observable } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { UsaLegifyApplication } from '../../../../models';
import { USA_SUPPORTING_DOC_TYPE_GROUP } from '../../constants';

@Injectable()
export class UsaApplyDocumentsService extends ApplyDocumentsService {
  public getDocumentRequirementsForCustomer(
    customer: Customer
  ): Observable<RequiredDocument[]> {
    return super.getDocumentRequirementsForCustomer(customer).pipe(
      withLatestFrom(
        this.applyService.getCurrApplication<UsaLegifyApplication>(),
        this.applyDocumentsConfigService.requiredDocuments$
      ),
      map(([coreRequiredDocs, currApplication, requiredDocConfigs]) => {
        if (!currApplication.isVirtual) {
          return coreRequiredDocs;
        }

        const requiredDocs = [...coreRequiredDocs];

        const customerSelfieReqs = requiredDocConfigs.filter(
          (config) =>
            config.documentCategory ===
              USA_SUPPORTING_DOC_TYPE_GROUP.CUSTOMER_SELFIES &&
            config.forRoles.includes(customer.role)
        );

        requiredDocs.push(...customerSelfieReqs);

        return requiredDocs;
      })
    );
  }
}
