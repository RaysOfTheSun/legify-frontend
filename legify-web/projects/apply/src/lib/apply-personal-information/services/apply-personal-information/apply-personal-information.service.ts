import { Injectable } from '@angular/core';
import { TaskCardRow } from '@legify/web-ui-elements';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APPLY_MODULE } from '../../../constants';
import { LegifyApplyConfigService } from '../../../services';

@Injectable()
export class ApplyPersonalInformationService {
  constructor(protected applyConfigService: LegifyApplyConfigService) {}

  get taskCardConfigs$(): Observable<TaskCardRow[]> {
    return this.applyConfigService
      .getTaskCardConfigsForModule(APPLY_MODULE.PERSONAL_INFO)
      .pipe(map(({ config }) => config));
  }
}
