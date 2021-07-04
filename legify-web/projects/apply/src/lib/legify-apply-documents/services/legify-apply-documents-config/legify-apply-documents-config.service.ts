import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskCardRow } from '@legify/web-ui-elements';
import { APPLY_MODULE } from '../../../constants';
import { LegifyApplyConfigService } from '../../../services';
import { ApplySupportingDocsConfig } from '../../../models/apply-config/module-configs/apply-documents/apply-supporting-docs-config';
import { LegifyDocumentRequirementConfig } from '../../../models';

@Injectable()
export class LegifyApplyDocumentsConfigService {
  constructor(protected applyConfigService: LegifyApplyConfigService) {}

  get taskCardRowConfigs(): Observable<TaskCardRow[]> {
    return this.applyConfigService
      .getTaskCardRowConfigForModule(APPLY_MODULE.DOCUMENTS)
      .pipe(map((config) => config?.config || []));
  }

  get moduleConfig$(): Observable<ApplySupportingDocsConfig> {
    return this.applyConfigService.applyConfig$.pipe(
      map((applyConfig) => applyConfig.documents)
    );
  }

  get requiredDocuments$(): Observable<LegifyDocumentRequirementConfig[]> {
    return this.moduleConfig$.pipe(
      map((moduleConfig) => moduleConfig.requiredDocs)
    );
  }
}
