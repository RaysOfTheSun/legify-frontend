import { Injectable } from '@angular/core';
import {
  ApplyService,
  ApplyConfigService,
  ApplyHttpDataService
} from '@legify/web-apply';
import { UsaLegifyApplication } from '../../models/application/legify-usa-application';

@Injectable()
export class UsaApplyService extends ApplyService<UsaLegifyApplication> {
  constructor(
    protected applyConfigService: ApplyConfigService,
    protected applyHttpDataService: ApplyHttpDataService
  ) {
    super(applyConfigService, applyHttpDataService);
  }
}
