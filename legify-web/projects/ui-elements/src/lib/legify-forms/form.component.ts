import { AfterViewChecked, ChangeDetectorRef, Component, DoCheck, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { get } from 'lodash-es';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { LEGIFY_FORM_CONTROL_VALIDATOR_MAP } from './constants/legify-form-control-validator-map';
import { LegifyFormControlConfig, LegifyFormControlGroupConfig } from './models';

@Component({
  selector: 'legify-web-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, DoCheck, AfterViewChecked {
  @Input() group: BehaviorSubject<FormGroup> = new BehaviorSubject(null);
  @Input() groups: LegifyFormControlGroupConfig[];
  @Input() dataSource: any;

  constructor(protected chnageDetectorRef: ChangeDetectorRef, protected formBuilder: FormBuilder) {}

  get sections(): LegifyFormControlGroupConfig[] {
    return this.groups;
  }

  protected makeFormGroupWithGroupConfig(groupConfig: LegifyFormControlConfig[]): Record<string, FormControl> {
    return groupConfig.reduce((allControls, currControl) => {
      allControls[currControl.name] = this.formBuilder.control(get(this.dataSource, currControl.dataBinding));
      return allControls;
    }, {});
  }

  protected makeFormGroup(): FormGroup {
    return this.groups.reduce((allGroups, currGroup) => {
      allGroups.addControl(currGroup.name, new FormGroup(this.makeFormGroupWithGroupConfig(currGroup.controls)));
      return allGroups;
    }, new FormGroup({}));
  }

  ngOnInit(): void {}

  ngDoCheck() {
    // this.group.next(this.makeFormGroup());
    const createForm$ = new Observable<FormGroup>((subscriber) => {
      const formGroup = this.makeFormGroup();
      subscriber.next(formGroup);
      subscriber.complete();
    }).pipe(tap((formGroup) => this.group.next(formGroup)));
    createForm$.pipe(take(1)).subscribe();
  }

  ngAfterViewChecked(): void {
    this.chnageDetectorRef.detectChanges();
  }
}
