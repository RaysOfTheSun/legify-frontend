import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TaskCardConfig } from '@legify/web-ui-elements';
import { APPLY_MODULE } from '../../../constants';
import { ApplySupportingDocsConfig } from '../../../models/apply-config/module-configs/apply-documents/apply-supporting-docs-config';
import { LegifyDocumentRequirementConfig } from '../../../models';
import { ApplyConfigService } from '../../../services';

@Injectable()
export class LegifyApplyDocumentsConfigService {
  constructor(protected applyConfigService: ApplyConfigService) {}

  get taskCardConfigs(): Observable<TaskCardConfig> {
    return this.applyConfigService.getTaskCardConfigsForModule(APPLY_MODULE.DOCUMENTS);
  }

  get moduleConfig$(): Observable<ApplySupportingDocsConfig> {
    return this.applyConfigService.applyConfig$.pipe(map((applyConfig) => applyConfig.documents));
  }

  get requiredDocuments$(): Observable<LegifyDocumentRequirementConfig[]> {
    return this.moduleConfig$.pipe(map((moduleConfig) => moduleConfig.requiredDocs));
  }
}
