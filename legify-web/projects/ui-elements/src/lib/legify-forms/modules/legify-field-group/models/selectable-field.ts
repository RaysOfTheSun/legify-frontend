import { OptionGroupOption } from '../../legify-form-control/models';
import { Field } from './field';

export interface SelectableField extends Field {
  options: OptionGroupOption[];
}
