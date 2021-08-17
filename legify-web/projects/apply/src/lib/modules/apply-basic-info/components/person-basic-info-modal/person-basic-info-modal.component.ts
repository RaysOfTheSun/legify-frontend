import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroupComponent } from '@legify/web-ui-elements';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApplyBasicInfoConfigService, ApplyBasicInfoService } from '../../services';

@Component({
  selector: 'legify-web-person-basic-info-modal',
  templateUrl: './person-basic-info-modal.component.html',
  styleUrls: ['./person-basic-info-modal.component.scss']
})
export class PersonBasicInfoModalComponent implements OnInit {
  public formSections: FormGroupComponent[];

  public componentPropertyMapping$: Observable<Record<string, FormGroup>>;

  constructor(
    protected applyBasicInfoService: ApplyBasicInfoService,
    protected applyBasicInfoConfigService: ApplyBasicInfoConfigService,
    @Inject(MAT_DIALOG_DATA) protected data: any
  ) {
    this.componentPropertyMapping$ = this.applyBasicInfoService
      .getBasicInfoFormFormGroup(this.data.customer)
      .pipe(map((formGroup) => ({ parentFormGroup: formGroup })));
    this.formSections = this.applyBasicInfoConfigService.getBasicInfoFormSectionsForRole('IO' as any);
  }

  ngOnInit(): void {}
}
