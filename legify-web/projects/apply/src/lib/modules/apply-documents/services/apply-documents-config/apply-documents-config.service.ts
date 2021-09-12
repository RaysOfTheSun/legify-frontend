import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApplyAppModule } from '../../../../constants';
import { ApplyDocumentsModuleConfig, RequiredDocument } from '../../../../models';
import { ApplyConfigService } from '../../../apply-data-providers';

@Injectable()
export class ApplyDocumentsConfigService {
  constructor(protected applyConfigService: ApplyConfigService) {}

  get moduleConfig$(): Observable<ApplyDocumentsModuleConfig> {
    return this.applyConfigService.getConfigForModule<ApplyDocumentsModuleConfig>(ApplyAppModule.DOCUMENTS);
  }

  get requiredDocuments$(): Observable<RequiredDocument[]> {
    return this.moduleConfig$.pipe(map((moduleConfig) => moduleConfig && moduleConfig.requiredDocuments));
  }
}
