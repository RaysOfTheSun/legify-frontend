import { Validators } from '@angular/forms';
import { LEGIFY_FORM_CONTROL_VALIDATOR_TYPE } from './legify-form-control-validator-type-enum';

export const LEGIFY_FORM_CONTROL_VALIDATOR_MAP = new Map([
  [LEGIFY_FORM_CONTROL_VALIDATOR_TYPE.EMAIL, Validators.email],
  [LEGIFY_FORM_CONTROL_VALIDATOR_TYPE.REQUIRED, Validators.required]
]);
