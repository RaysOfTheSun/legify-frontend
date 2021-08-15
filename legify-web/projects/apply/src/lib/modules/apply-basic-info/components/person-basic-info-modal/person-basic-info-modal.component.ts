import { Component, Inject, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormGroupComponent } from '@legify/web-ui-elements';
import { ApplyService } from '../../../../services';
import { BASIC_INFO_FORM_SECTIONS } from '../../constants/injection-tokens';

@Component({
  selector: 'legify-web-person-basic-info-modal',
  templateUrl: './person-basic-info-modal.component.html',
  styleUrls: ['./person-basic-info-modal.component.scss']
})
export class PersonBasicInfoModalComponent implements OnInit {
  public formGroup: FormGroup;
  public formSections: FormGroupComponent[];

  constructor(
    protected applyService: ApplyService,
    protected formBuilder: FormBuilder,
    @Inject(BASIC_INFO_FORM_SECTIONS) protected formSectionsMap: Map<string, FormGroupComponent[]>
  ) {
    this.formGroup = this.formBuilder.group({
      nameInfo: this.formBuilder.group({
        title: ['mr'],
        surname: ['', []],
        givenName: ['', []],
        hasAlternateName: [true],
        relationshipToInsured: ['spouse']
      }),
      birthInfo: this.formBuilder.group({
        age: [22],
        gender: ['Male'],
        dateOfBirth: []
      })
    });

    this.formSections = this.formSectionsMap.get('IO');
    this.formGroup.valueChanges.subscribe(console.log);
  }

  ngOnInit(): void {}
}
