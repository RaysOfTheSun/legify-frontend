import { InjectionToken } from '@angular/core';
import { LazilyRenderedComponent } from '@legify/web-ui-elements';
import { ConsumerRole } from 'projects/apply/src/lib/constants';

export const BASIC_INFO_FORM_SUBFORMS = new InjectionToken<Map<ConsumerRole, LazilyRenderedComponent>>(
  'BasicInfoFormSubforms'
);
