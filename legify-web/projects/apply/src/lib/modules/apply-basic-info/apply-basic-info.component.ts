import { Component, OnInit } from '@angular/core';
import {
  LegifyFormControlGroupConfig,
  LEGIFY_FORM_CONTROL_TYPE,
  LEGIFY_FORM_CONTROL_VALIDATOR_TYPE
} from '@legify/web-ui-elements';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { PERSON_ROLE } from '../../constants';
import { Person } from '../../models';
import { ApplyConfigService, ApplyService } from '../../services';

@Component({
  selector: 'legify-web-apply-basic-info',
  templateUrl: './apply-basic-info.component.html',
  styleUrls: ['./apply-basic-info.component.scss']
})
export class ApplyBasicInfoComponent implements OnInit {
  // controls: Observable<LegifyFormControlGroupConfig[]>;

  constructor(protected applyService: ApplyService, protected applyConfigService: ApplyConfigService) {}

  ngOnInit(): void {}

  get controls(): Observable<LegifyFormControlGroupConfig[]> {
    return this.applyConfigService.getBasicInfoConfig().pipe(
      map((config) => {
        return config.forms && config.forms.length !== 0
          ? config?.forms.find((c) => c.forRoles.includes(PERSON_ROLE.OWNER_AND_INSUDRED))?.sections
          : [];
      })
    );
  }

  get formDataSource(): Observable<Person> {
    return this.applyService.getCurrCustomer();
  }
}
