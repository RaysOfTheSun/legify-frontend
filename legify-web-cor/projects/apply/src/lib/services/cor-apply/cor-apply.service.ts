import { Injectable } from '@angular/core';
import {
  LegifyApplyService,
  LegifyApplyConfigService,
  LegifyApplyHttpDataService
} from '@legify/web-apply';

@Injectable()
export class CorApplyService extends LegifyApplyService {
  constructor(
    protected legifyApplyConfigService: LegifyApplyConfigService,
    protected legifyApplyHttpDataService: LegifyApplyHttpDataService
  ) {
    super(legifyApplyConfigService, legifyApplyHttpDataService);
  }
}
