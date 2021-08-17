import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplyConfigService } from '../../../../services';
import { ApplyBasicInfoConfig } from '../../../../models';
import { map } from 'rxjs/operators';
import { APPLY_MODULE, PERSON_ROLE } from '../../../../constants';
import { TaskCardConfig, FormGroupComponent } from '@legify/web-ui-elements';
import { BASIC_INFO_FORM_SECTIONS } from '../../constants/injection-tokens';

@Injectable()
export class ApplyBasicInfoConfigService {
  constructor(
    protected applyConfigService: ApplyConfigService,
    @Inject(BASIC_INFO_FORM_SECTIONS) protected basicInfoFormSectionMap: Map<PERSON_ROLE, FormGroupComponent[]>
  ) {}

  get moduleConfig$(): Observable<ApplyBasicInfoConfig> {
    return this.applyConfigService.applyConfig$.pipe(map((applyConfig) => applyConfig.basicInfo));
  }

  get taskCardConfigs$(): Observable<TaskCardConfig> {
    return this.applyConfigService.getTaskCardConfigsForModule(APPLY_MODULE.PERSONAL_INFO);
  }

  public getBasicInfoFormSectionsForRole(role: PERSON_ROLE): FormGroupComponent[] {
    return this.basicInfoFormSectionMap.get(role);
  }
}
