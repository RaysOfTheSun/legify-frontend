import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskCardConfig } from '@legify/web-ui-elements';
import { ApplyAppModule } from '../../../../constants';
import { ApplyDocumentsModuleConfig, RequiredDocument } from '../../../../models';
import { ApplyConfigService } from '../../../apply-data-providers';

@Injectable()
export class ApplyDocumentsConfigService {
  constructor(protected applyConfigService: ApplyConfigService) {}

  get moduleConfig$(): Observable<ApplyDocumentsModuleConfig> {
    return this.applyConfigService.getConfigForModule<ApplyDocumentsModuleConfig>(ApplyAppModule.DOCUMENTS);
  }

  get taskCardConfigs(): Observable<TaskCardConfig> {
    return this.moduleConfig$.pipe(map((moduleConfig) => moduleConfig && moduleConfig.taskCardLayout));
  }

  get requiredDocuments$(): Observable<RequiredDocument[]> {
    return this.moduleConfig$.pipe(map((moduleConfig) => moduleConfig && moduleConfig.requiredDocuments));
  }
}
