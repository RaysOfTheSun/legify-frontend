import { ApplyTaskCardConfigs } from './apply-task-card-configs';
import { ApplyShellSidenavItem } from '@legify/web-ui-elements';
import { ApplySupportingDocsConfig } from './module-configs/apply-documents/apply-supporting-docs-config';

export interface ApplyConfig {
  navItems: ApplyShellSidenavItem[];
  documents: ApplySupportingDocsConfig;
  taskCardConfigs: ApplyTaskCardConfigs[];
}
