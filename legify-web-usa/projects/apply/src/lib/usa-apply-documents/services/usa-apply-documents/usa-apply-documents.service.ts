import { Injectable } from '@angular/core';
import {
  Person,
  LegifyApplyService,
  LegifyApplyDataService,
  LegifyDocumentRequirement,
  LegifyApplyDocumentsService,
  LegifyApplyPersonMapperService,
  LegifyApplyDocumentsDataService,
  LegifyApplyDocumentsConfigService,
  LegifyApplyDocumentsProgressService
} from '@legify/web-apply';
import { Observable } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { UsaLegifyApplication } from '../../../models/application/legify-usa-application';
import { USA_SUPPORTING_DOC_TYPE_GROUP } from '../../constants';
import { LegifyApplyDocumentsDocumentMapperService } from '@legify/web-apply';

@Injectable()
export class UsaApplyDocumentsService extends LegifyApplyDocumentsService {
  constructor(
    protected applyService: LegifyApplyService<UsaLegifyApplication>,
    protected applyDataService: LegifyApplyDataService,
    protected documentMapperService: LegifyApplyDocumentsDocumentMapperService,
    protected documentsProgressService: LegifyApplyDocumentsProgressService,
    protected applyPersonMapperService: LegifyApplyPersonMapperService,
    protected applyDocumentsDataService: LegifyApplyDocumentsDataService,
    protected applyDocumentsConfigService: LegifyApplyDocumentsConfigService
  ) {
    super(
      applyService,
      applyDataService,
      documentMapperService,
      documentsProgressService,
      applyPersonMapperService,
      applyDocumentsDataService,
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
