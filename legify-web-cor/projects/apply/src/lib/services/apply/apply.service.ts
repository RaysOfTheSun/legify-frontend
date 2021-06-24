import { Injectable } from '@angular/core';
import { LegifyApplyService } from '@legify/web-apply';
import {
  LegifyApplyConfigService,
  LegifyApplyHttpDataService
} from '@legify/web-apply';

@Injectable()
export class ApplyService extends LegifyApplyService {
  constructor(
    protected legifyApplyConfigService: LegifyApplyConfigService,
    protected legifyApplyHttpDataService: LegifyApplyHttpDataService
  ) {
    super(legifyApplyConfigService, legifyApplyHttpDataService);
  }
}
