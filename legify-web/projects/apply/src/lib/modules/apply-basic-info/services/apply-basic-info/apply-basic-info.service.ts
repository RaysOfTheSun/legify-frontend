import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      personalInfo: this.formBuilder.group({
        nameInfo: this.formBuilder.group({
          title: ['mr'],
          first: [{ value: '', disabled: true }, [Validators.required]],
          last: [{ value: '', disabled: true }, []]
        }),
        parentNameInfo: this.formBuilder.group({
          first: [],
          last: []
        }),
        alternateNameInfo: this.formBuilder.group({
          hasAlternateName: [true],
          last: ['', []],
          first: ['', [Validators.required]]
        }),
        birthInfo: this.formBuilder.group({
          age: [{ value: 22, disabled: true }],
          gender: [{ value: 'Male', disabled: true }],
          dateOfBirth: [{ value: `${new Date().toTimeString()}`, disabled: true }]
        }),
        miscInfo: this.formBuilder.group({
          relationshipToInsured: [{ value: 'spouse', disabled: true }]
        })
      }),
      identificationInfo: this.formBuilder.group({
        type: ['passport'],
        number: ['', [Validators.required]],
        issueDate: ['', [Validators.required]]
      }),
      contactInfo: this.formBuilder.group({
        emailInfo: [],
        facebookInfo: this.formBuilder.group({
          facebookId: [],
          facebookEmail: []
        }),
        phoneInfo: this.formBuilder.group({
          mobile: this.formBuilder.group({
            countryCode: [],
            number: []
          }),
          residential: this.formBuilder.group({
            countryCode: [],
            number: []
          })
        })
      })
    });

    formGroup.valueChanges.subscribe(console.log);

    return formGroup;
  }

  public getBasicInfoFormFormGroup(formGroupDataSource: Person): Observable<FormGroup> {
    return this.applyBasicInfoConfigService.moduleConfig$.pipe(
      map((moduleConfig) => {
        if (!moduleConfig) {
          return null;
        }

        const formGroup = this.createBasicInfoFormGroup();
        moduleConfig.formFieldToDataSourceMaps.forEach((formGroupMapping) =>
          formGroup
            .get(formGroupMapping.forField)
            .setValue(get(formGroupDataSource, formGroupMapping.dataPath, formGroupMapping.defaultValue))
        );

        return formGroup;
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
