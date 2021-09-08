import { ApplyDocumentsServiceMap } from './apply-documents-service-map';
import {
  ApplyService,
  ConsumerDataService,
  ApplyDocumentsConfigService,
  ApplyDocumentsProgessService,
  ApplyDocumentUploadDataProviderService
} from '@legify/web-apply';
import { AppConfigService } from '@legify/web-core';

export const ApplyDocumentsServiceFactory = (
  appConfigService: AppConfigService,
  applyService: ApplyService,
  consumerDataService: ConsumerDataService,
  documentsProgressService: ApplyDocumentsProgessService,
  applyDocumentsConfigService: ApplyDocumentsConfigService,
  applyDocumentUploadDataProviderService: ApplyDocumentUploadDataProviderService
) => {
  const applyDocumentsServiceType = ApplyDocumentsServiceMap.get(appConfigService.currMarket);

  return new applyDocumentsServiceType(
    applyService,
    consumerDataService,
    documentsProgressService,
    applyDocumentsConfigService,
    applyDocumentUploadDataProviderService
  );
};
