import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplyConfigService } from '../../../../services';
import { ApplyModule, ConsumerRole } from '../../../../constants';
import { TaskCardConfig, FormGroupComponent } from '@legify/web-ui-elements';
import { BASIC_INFO_FORM_SECTIONS } from '../../constants';
import { map } from 'rxjs/operators';
import { ApplyBasicInfoModuleConfig } from '../../../../models';

@Injectable()
export class ApplyBasicInfoConfigService {
  constructor(
    protected applyConfigService: ApplyConfigService,
    @Inject(BASIC_INFO_FORM_SECTIONS) protected basicInfoFormSectionMap: Map<ConsumerRole, FormGroupComponent[]>
  ) {}

  get moduleConfig$(): Observable<ApplyBasicInfoModuleConfig> {
    return this.applyConfigService.getConfigForModule<ApplyBasicInfoModuleConfig>(ApplyModule.BASIC_INFO);
  }

  get taskCardConfigs$(): Observable<TaskCardConfig> {
    return this.moduleConfig$.pipe(map((config) => config?.taskCardLayout));
  }

  public getBasicInfoFormSectionsForRole(role: ConsumerRole): FormGroupComponent[] {
    return this.basicInfoFormSectionMap.get(role);
  }
}
