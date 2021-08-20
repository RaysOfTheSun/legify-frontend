import { Person } from '../../../models';
import { Observable } from 'rxjs';
import { FormComponentPropertyMap } from './form-component-property-map';

export interface PersonBasicInfoFormModalData {
  sections: any[];
  customer: Person;
  componentPropertyMapping: Observable<FormComponentPropertyMap>;
}
