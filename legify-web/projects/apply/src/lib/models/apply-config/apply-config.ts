import { ApplyShellSidenavItem } from '@legify/web-ui-elements';
import { ApplyModuleConfigMapping } from './apply-module-config-mapping';

export interface ApplyConfig {
  modules: ApplyModuleConfigMapping[];
  navItems: ApplyShellSidenavItem[];
}
