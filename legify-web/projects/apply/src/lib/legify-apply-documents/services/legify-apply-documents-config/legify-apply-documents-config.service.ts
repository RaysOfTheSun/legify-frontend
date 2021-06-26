import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskCardRow } from '@legify/web-ui-elements';
import { APPLY_MODULE } from '../../../constants';
import { LegifyApplyConfigService } from '../../../services';

@Injectable()
export class LegifyApplyDocumentsConfigService {
  constructor(protected applyConfigService: LegifyApplyConfigService) {}

  get taskCardRowConfigs(): Observable<TaskCardRow[]> {
    return this.applyConfigService
      .getTaskCardRowConfigForModule(APPLY_MODULE.DOCUMENTS)
      .pipe(map((config) => config?.config || []));
  }
}
