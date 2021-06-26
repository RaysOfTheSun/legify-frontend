import { ApplyTaskCardConfigs } from './apply-task-card-configs';
import { ApplyShellSidenavItem } from '@legify/web-ui-elements';

export interface ApplyConfig {
  navItems: ApplyShellSidenavItem[];
  taskCardConfigs: ApplyTaskCardConfigs;
}
