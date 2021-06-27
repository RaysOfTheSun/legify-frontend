import { Injectable } from '@angular/core';
import { LegifyApplyConfigService } from '@legify/web-apply';

@Injectable()
export class CorApplyConfigService extends LegifyApplyConfigService {
  constructor() {
    super();
  }

  get applyConfigUrl(): string {
    return 'assets/configs/cor-apply-config.json';
  }
}
