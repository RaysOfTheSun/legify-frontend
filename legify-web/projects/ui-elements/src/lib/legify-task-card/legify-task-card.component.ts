import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '@legify/web-core';
import { TaskCardField } from './models/task-card-field';
import { get } from 'lodash';
import { COLOR } from './constants/color-enum';

@Component({
  selector: 'legify-web-task-card',
  templateUrl: './legify-task-card.component.html',
  styleUrls: ['./legify-task-card.component.scss']
})
export class LegifyTaskCardComponent implements OnInit {
  @Input() taskCardClass = '';

  @Input() person: Person;
  @Input() fields: TaskCardField[];
  @Input() headerText: string;

  @Input() highlightColor: string;
  @Input() showProgressBar = true;
  @Input() footerHeaderText: string;
  @Input() progressBarValue: string;

  @Output() handleClick: EventEmitter<Person> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  get highlight(): string {
    return this.highlightColor || COLOR.ORANGE;
  }

  get footerHeader(): string {
    return this.footerHeaderText || 'Progress';
  }

  public handleClickEvent(): void {
    this.handleClick.emit(this.person);
  }

  public getRowHeaderFromConfig(taskCardConfig: TaskCardField): string {
    return taskCardConfig.rowHeader;
  }

  public getRowValueFromConfig(taskCardConfig: TaskCardField): string {
    return taskCardConfig.valueIsStatic
      ? taskCardConfig.rowValueSource
      : get(this.person, taskCardConfig.rowValueSource, '');
  }
}
