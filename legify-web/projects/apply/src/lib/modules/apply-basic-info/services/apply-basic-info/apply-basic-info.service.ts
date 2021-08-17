import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { get } from 'lodash-es';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { Customer } from '../../../../models';
import { ApplyBasicInfoConfigService } from '../apply-basic-info-config/apply-basic-info-config.service';

@Injectable()
export class ApplyBasicInfoService {
  constructor(protected formBuilder: FormBuilder, protected applyBasicInfoConfigService: ApplyBasicInfoConfigService) {}

  protected createBasicInfoFormGroup(): FormGroup {
    const formGroup = this.formBuilder.group({
      nameInfo: this.formBuilder.group({
        title: ['mr'],
        first: ['', []],
        last: ['', []],
        hasAlternateName: [true],
        relationshipToInsured: ['spouse']
      }),
      birthInfo: this.formBuilder.group({
        age: [22],
        gender: ['Male'],
        dateOfBirth: []
      })
    });

    return formGroup;
  }

  public getBasicInfoFormFormGroup(formGroupDataSource: Customer): Observable<FormGroup> {
    return this.applyBasicInfoConfigService.moduleConfig$.pipe(
      map((moduleConfig) => {
        const formGroup = this.createBasicInfoFormGroup();
        moduleConfig.formGroupMappings.forEach((formGroupMapping) =>
          formGroup
            .get(formGroupMapping.forField)
            .setValue(get(formGroupDataSource, formGroupMapping.dataPath, formGroupMapping.defaultValue))
        );

        return formGroup;
      })
    );
  }
}
