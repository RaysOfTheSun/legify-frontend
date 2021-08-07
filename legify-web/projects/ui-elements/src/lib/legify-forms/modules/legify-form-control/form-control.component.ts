import { AfterViewInit, Component, forwardRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DefaultValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioGroupFormControlComponent } from './components/radio-group-form-control/radio-group-form-control.component';
import { LegifyFormControlType } from './constants';
import { LegifyFormControl } from './models';

@Component({
  selector: 'legify-web-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DefaultValueAccessor),
      multi: true
    }
  ]
})
export class FormControlComponent implements OnInit, AfterViewInit {
  @Input() controls: LegifyFormControl[];

  @ViewChild('radio_group', { static: true })
  protected radioGroupTemplate: TemplateRef<RadioGroupFormControlComponent>;

  public formGroup: FormGroup;

  // TODO: create a common interface that represents a LegifyFormControlComponent
  protected templateMap: Map<LegifyFormControlType, TemplateRef<any>> = new Map();

  constructor(protected formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup(this.formControls);
    this.templateMap.set(LegifyFormControlType.RADIO_GROUP, this.radioGroupTemplate);
    this.formGroup.valueChanges.subscribe(console.log);
  }

  get formControls(): Record<string, FormControl> {
    return this.controls.reduce((acc, curr) => {
      acc[curr.name] = new FormControl();
      return acc;
    }, {});
  }

  get hasTemplates(): boolean {
    return this.templateMap.size !== 0;
  }

  public ngAfterViewInit(): void {}

  public getTemplateForControl(legifyFormControl: LegifyFormControl): TemplateRef<any> {
    return this.templateMap.get(legifyFormControl.type);
  }
}
