import { Injectable } from '@angular/core';
import {
  Person,
  LegifyApplyService,
  LegifyApplyDataService,
  LegifyDocumentRequirement,
  LegifyApplyDocumentsService,
  LegifyApplyPersonMapperService,
  LegifyApplyDocumentsConfigService
} from '@legify/web-apply';
import { Observable } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { UsaLegifyApplication } from '../../../models/application/legify-usa-application';
import { USA_SUPPORTING_DOC_TYPE_GROUP } from '../../constants';

@Injectable()
export class UsaApplyDocumentsService extends LegifyApplyDocumentsService {
  constructor(
    protected applyService: LegifyApplyService<UsaLegifyApplication>,
    protected applyDataService: LegifyApplyDataService,
    protected applyPersonMapperService: LegifyApplyPersonMapperService,
    protected applyDocumentsConfigService: LegifyApplyDocumentsConfigService
  ) {
    super(
      applyService,
      applyDataService,
      applyPersonMapperService,
      applyDocumentsConfigService
    );
  }

  public getDocumentRequirementsForPerson(
    person: Person
  ): Observable<LegifyDocumentRequirement[]> {
    return super.getDocumentRequirementsForPerson(person).pipe(
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
            config.forRoles.includes(person.role)
        );

        requiredDocs.push(...customerSelfieReqs);

        return requiredDocs;
      })
    );
  }
}
