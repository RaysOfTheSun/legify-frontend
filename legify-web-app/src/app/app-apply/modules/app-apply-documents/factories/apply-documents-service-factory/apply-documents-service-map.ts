import { ApplyDocumentsService } from '@legify/web-apply';
import { UsaApplyDocumentsService } from '@legify-usa/web-apply';
import { LEGIFY_MARKET } from '@legify/web-core';

export const ApplyDocumentsServiceMap = new Map<LEGIFY_MARKET, typeof ApplyDocumentsService>([
  [LEGIFY_MARKET.COR, ApplyDocumentsService],
  [LEGIFY_MARKET.USA, UsaApplyDocumentsService]
]);
