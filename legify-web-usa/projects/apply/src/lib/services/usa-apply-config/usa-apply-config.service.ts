import { Injectable } from '@angular/core';
import { ApplyConfigService } from '@legify/web-apply';

@Injectable()
export class UsaApplyConfigService extends ApplyConfigService {
  constructor() {
    super();
  }

  get applyConfigUrl(): string {
    return 'assets/configs/usa-apply-config.json';
  }
}
