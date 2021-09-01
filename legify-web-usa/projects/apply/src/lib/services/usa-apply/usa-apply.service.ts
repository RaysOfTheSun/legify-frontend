import { Injectable } from '@angular/core';
import { ApplyService } from '@legify/web-apply';
import { UsaLegifyApplication } from '../../models';

@Injectable()
export class UsaApplyService extends ApplyService<UsaLegifyApplication> {}
