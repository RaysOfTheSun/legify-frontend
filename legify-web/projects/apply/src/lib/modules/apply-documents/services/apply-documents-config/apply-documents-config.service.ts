import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskCardConfig } from '@legify/web-ui-elements';
import { ApplyModule } from '../../../../constants';
import { ApplyConfigService } from '../../../../services';
import { ApplyDocumentsModuleConfig, RequiredDocument } from '../../../../models';

@Injectable()
export class ApplyDocumentsConfigService {
  constructor(protected applyConfigService: ApplyConfigService) {}

  get moduleConfig$(): Observable<ApplyDocumentsModuleConfig> {
    return this.applyConfigService.getConfigForModule<ApplyDocumentsModuleConfig>(ApplyModule.DOCUMENTS);
  }

  get taskCardConfigs(): Observable<TaskCardConfig> {
    return this.moduleConfig$.pipe(map((moduleConfig) => moduleConfig && moduleConfig.taskCardLayout));
  }

  get requiredDocuments$(): Observable<RequiredDocument[]> {
    return this.moduleConfig$.pipe(map((moduleConfig) => moduleConfig && moduleConfig.requiredDocuments));
  }
}
