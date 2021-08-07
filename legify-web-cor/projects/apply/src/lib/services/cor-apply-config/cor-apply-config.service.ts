import { Injectable } from '@angular/core';
import { ApplyConfigService } from '@legify/web-apply';

@Injectable()
export class CorApplyConfigService extends ApplyConfigService {
  constructor() {
    super();
  }

  get applyConfigUrl(): string {
    return 'assets/configs/cor-apply-config.json';
  }
}
