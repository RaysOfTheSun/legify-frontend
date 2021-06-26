import { Injectable } from '@angular/core';
import { LegifyApplyConfigService } from '@legify/web-apply';

@Injectable()
export class ApplyConfigService extends LegifyApplyConfigService {
  constructor() {
    super();
  }

  get applyConfigUrl(): string {
    return 'assets/configs/usa-apply-config.json';
  }
}
