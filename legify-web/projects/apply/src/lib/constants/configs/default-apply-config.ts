import { ApplyConfig } from '../../models';

export const DEFAULT_LEGIFY_APPLY_CONFIG: ApplyConfig = {
  navItems: [],
  taskCardConfigs: {
    rowConfigs: [],
    highlightColorToPersonTypeMap: {
      IO: '' as any,
      OI: '' as any,
      PI: '' as any,
      PO: '' as any
    }
  }
};
