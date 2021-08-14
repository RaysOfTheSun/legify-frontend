import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { get } from 'lodash-es';
import { LegifyFormControlConfig, LegifyFormControlGroupConfig } from '../../models';

@Component({
  selector: 'legify-web-form-control-group',
  templateUrl: './form-control-group.component.html',
  styleUrls: ['./form-control-group.component.scss']
})
export class FormControlGroupComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() config: LegifyFormControlGroupConfig;
  @Input() dataSource: any;

  public uniqueRows: number[] = [];

  constructor() {}

  protected getUniqueRows(): number[] {
    return [...new Set(this.config.controls.map((control) => control.row))];
  }

  public getControlsForRow(rowNumber: number): LegifyFormControlConfig[] {
    return this.config.controls.filter((control) => control.row === rowNumber);
  }

  ngOnInit(): void {
    this.uniqueRows = this.getUniqueRows();
  }
}
