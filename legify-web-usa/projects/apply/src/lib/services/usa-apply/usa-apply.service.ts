import { Injectable } from '@angular/core';
import {
  LegifyApplyService,
  LegifyApplyConfigService,
  LegifyApplyHttpDataService
} from '@legify/web-apply';
import { UsaLegifyApplication } from '../../models/application/legify-usa-application';

@Injectable()
export class UsaApplyService extends LegifyApplyService<UsaLegifyApplication> {
  constructor(
    protected applyConfigService: LegifyApplyConfigService,
    protected applyHttpDataService: LegifyApplyHttpDataService<UsaLegifyApplication>
  ) {
    super(applyConfigService, applyHttpDataService);
  }
}
