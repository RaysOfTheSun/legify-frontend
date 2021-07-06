import { HasSelectedApplicationGuard } from '../../../../app/guards/apply/has-selected-application/has-selected-application.guard';

export const APPLY_ROUTING_CONFIG = {
  guards: [HasSelectedApplicationGuard]
};
