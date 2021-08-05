import { Injectable } from '@angular/core';
import {
  ApplyService,
  ApplyConfigService,
  ApplyHttpDataService
} from '@legify/web-apply';

@Injectable()
export class CorApplyService extends ApplyService {
  constructor(
    protected ApplyConfigService: ApplyConfigService,
    protected ApplyHttpDataService: ApplyHttpDataService
  ) {
    super(ApplyConfigService, ApplyHttpDataService);
  }
}
