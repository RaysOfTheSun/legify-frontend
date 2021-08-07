import { Injectable } from '@angular/core';
import { TaskCardConfig } from '@legify/web-ui-elements';
import { Observable } from 'rxjs';
import { APPLY_MODULE } from '../../../../constants';
import { ApplyConfigService } from '../../../../services';

@Injectable()
export class ApplyBasicInfoService {
  constructor(protected applyConfigService: ApplyConfigService) {}

  get taskCardConfigs$(): Observable<TaskCardConfig> {
    return this.applyConfigService.getTaskCardConfigsForModule(APPLY_MODULE.PERSONAL_INFO);
  }
}
