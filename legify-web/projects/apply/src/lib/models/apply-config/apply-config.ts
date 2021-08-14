import { ApplyTaskCardConfigs } from './apply-task-card-configs';
import { ApplyShellSidenavItem } from '@legify/web-ui-elements';
import { ApplySupportingDocsConfig } from './module-configs/apply-documents/apply-supporting-docs-config';
import { ApplyBasicInfoConfig } from './module-configs/apply-basic-info';

export interface ApplyConfig {
  navItems: ApplyShellSidenavItem[];
  basicInfo: ApplyBasicInfoConfig;
  documents: ApplySupportingDocsConfig;
  taskCardConfigs: ApplyTaskCardConfigs[];
}
