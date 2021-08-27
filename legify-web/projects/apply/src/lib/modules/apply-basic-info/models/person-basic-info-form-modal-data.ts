import { Person } from '../../../models';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { LazilyRenderedSubformComponent } from '../../../models/config';

export interface PersonBasicInfoFormModalData {
  subforms: LazilyRenderedSubformComponent[];
  customer: Person;
  formGroup: Observable<FormGroup>;
}
