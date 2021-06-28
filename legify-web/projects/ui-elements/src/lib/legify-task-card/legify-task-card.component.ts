import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { get } from 'lodash-es';
import { TaskCardRow } from './models';
import { LegifyTaskCardConfigService } from './services';
import { AppConfigService } from '@legify/web-core';

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

  @Input() highlightColorKey?: string;

  @Output() handleClick: EventEmitter<any> = new EventEmitter();

  constructor(
    protected appConfigService: AppConfigService,
    protected taskCardConfigService: LegifyTaskCardConfigService
  ) {}

  ngOnInit(): void {}

  get highlight(): string {
    return (
      this.highlightColor ||
      this.taskCardConfigService.getHighlighColorFromAppConfig(
        this.highlightColorKey
      )
    );
  }

  get footerHeader(): string {
    return this.footerHeaderText || 'Completion';
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
