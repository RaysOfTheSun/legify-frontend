import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  ApplyService,
  ApplyConfigService,
  ApplyHttpDataService
} from '@legify/web-apply';

@Injectable()
export class CorApplyService extends ApplyService {
  constructor(
    protected router: Router,
    protected ApplyConfigService: ApplyConfigService,
    protected ApplyHttpDataService: ApplyHttpDataService
  ) {
    super(router, ApplyConfigService, ApplyHttpDataService);
  }
}
