import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplyAppModule, ConsumerRole } from '../../../../constants';
import { TaskCardConfig } from '@legify/web-ui-elements';
import { BASIC_INFO_FORM_SUBFORMS } from '../../constants';
import { map } from 'rxjs/operators';
import { ApplyBasicInfoModuleConfig, RequiredDocument, ApplyDocumentsModuleConfig } from '../../../../models';
import { ApplyConfigService } from '../../../apply-data-providers';

@Injectable()
export class ApplyBasicInfoConfigService {
  constructor(
    protected applyConfigService: ApplyConfigService,
    @Inject(BASIC_INFO_FORM_SUBFORMS) protected basicInfoFormSectionMap: Map<ConsumerRole, any[]>
  ) {}

  get moduleConfig$(): Observable<ApplyBasicInfoModuleConfig> {
    return this.applyConfigService.getConfigForModule<ApplyBasicInfoModuleConfig>(ApplyAppModule.BASIC_INFO);
  }

  get taskCardConfigs$(): Observable<TaskCardConfig> {
    return this.moduleConfig$.pipe(map((config) => config?.taskCardLayout));
  }

  public getBasicInfoFormSectionsForRole(role: ConsumerRole): any[] {
    return this.basicInfoFormSectionMap.get(role);
  }

  public getDocumentRequirementByDocumentType(documentType: string): Observable<RequiredDocument> {
    return this.applyConfigService
      .getConfigForModule<ApplyDocumentsModuleConfig>(ApplyAppModule.DOCUMENTS)
      .pipe(map((config) => config.requiredDocuments.find((requiredDoc) => requiredDoc.documentType === documentType)));
  }
}
