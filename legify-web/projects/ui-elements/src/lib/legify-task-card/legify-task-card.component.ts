import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { get } from 'lodash-es';
import { TaskCardRow } from './models';
import { TASK_CARD_HIGHLIGH_COLOR } from './constants';

@Component({
  selector: 'legify-web-task-card',
  templateUrl: './legify-task-card.component.html',
  styleUrls: ['./legify-task-card.component.scss']
})
export class LegifyTaskCardComponent implements OnInit {
  @Input() taskCardClass = '';

  @Input() rows: TaskCardRow[];
  @Input() headerText: string;
  @Input() dataSource: any;
  @Input() subHeaderText: string;

  @Input() highlightColor: string;
  @Input() showProgressBar = true;
  @Input() footerHeaderText: string;
  @Input() progressBarValue: string;

  @Output() handleClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  get highlight(): string {
    return this.highlightColor || TASK_CARD_HIGHLIGH_COLOR.ORANGE;
  }

  get footerHeader(): string {
    return this.footerHeaderText || 'Progress';
  }

  public handleClickEvent(): void {
    this.handleClick.emit(this.dataSource);
  }

  public getRowHeaderFromConfig(taskCardConfig: TaskCardRow): string {
    return taskCardConfig.rowHeader;
  }

  public getRowValueFromConfig(taskCardConfig: TaskCardRow): string {
    return taskCardConfig.valueIsStatic
      ? taskCardConfig.rowValueSource
      : get(this.dataSource, taskCardConfig.rowValueSource, '');
  }
}
