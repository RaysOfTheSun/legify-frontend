import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { get } from 'lodash-es';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer, Person } from '../../../../models';
import { ConsumerDataService, ApplyService } from '../../../../services';
import { ApplyBasicInfoConfigService } from '../apply-basic-info-config/apply-basic-info-config.service';

@Injectable()
export class ApplyBasicInfoService {
  constructor(
    protected formBuilder: FormBuilder,
    protected applyService: ApplyService,
    protected consumerDataService: ConsumerDataService,
    protected applyBasicInfoConfigService: ApplyBasicInfoConfigService
  ) {}

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
      }),
      identificationInfo: this.formBuilder.group({
        type: ['id']
      })
    });

    return formGroup;
  }

  public getBasicInfoFormFormGroup(formGroupDataSource: Person): Observable<Record<string, FormGroup>> {
    return this.applyBasicInfoConfigService.moduleConfig$.pipe(
      map((moduleConfig) => {
        if (!moduleConfig) {
          return { parentFormGroup: null };
        }

        const formGroup = this.createBasicInfoFormGroup();
        moduleConfig.formFieldToDataSourceMaps.forEach((formGroupMapping) =>
          formGroup
            .get(formGroupMapping.forField)
            .setValue(get(formGroupDataSource, formGroupMapping.dataPath, formGroupMapping.defaultValue))
        );

        return { parentFormGroup: formGroup };
      })
    );
  }

  public getPersonsThatNeedBasicInfo(): Observable<Customer[]> {
    return this.applyService.currApplication$.pipe(
      map((currApplication) =>
        currApplication ? this.consumerDataService.getAllInsuredPersonsFromApplication(currApplication) : []
      )
    );
  }
}
