import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { get } from 'lodash-es';
import { TaskCardConfig, TaskCardRow } from './models';
import { LegifyTaskCardConfigService } from './services';
import { TaskCardDisplayValue } from './models/task-card-display-value';

@Component({
  selector: 'legify-web-task-card',
  templateUrl: './legify-task-card.component.html',
  styleUrls: ['./legify-task-card.component.scss']
})
export class LegifyTaskCardComponent implements OnInit {
  @Input() config: TaskCardConfig;
  @Input() dataSource: any;

  @Input() taskCardClass = '';
  @Input() highlightColor: string;

  @Input() progressBarValue: string;

  @Output() handleClick: EventEmitter<any> = new EventEmitter();

  constructor(protected taskCardConfigService: LegifyTaskCardConfigService) {}

  ngOnInit(): void {}

  get rows(): TaskCardRow[] {
    return this.config.rows || [];
  }

  get highlight(): string {
    return (
      this.highlightColor ||
      this.taskCardConfigService.getHighlighColorFromAppConfig(
        this.getTaskCardDisplayValue(this.config.highlightColorKey)
      )
    );
  }

  get hasProgressbar(): boolean {
    return this.config.showProgressBar ?? true;
  }

  get headerText(): string {
    return this.getTaskCardDisplayValue(this.config.headerText);
  }

  get subHeaderText(): string {
    return this.getTaskCardDisplayValue(this.config.subHeaderText);
  }

  get footerHeader(): string {
    return this.getTaskCardDisplayValue(this.config.footerText);
  }

  public handleClickEvent(): void {
    this.handleClick.emit(this.dataSource);
  }

  public getRowHeaderFromConfig({ header }: TaskCardRow): string {
    return this.getTaskCardDisplayValue(header);
  }

  public getRowValueFromConfig({ value }: TaskCardRow): string {
    return this.getTaskCardDisplayValue(value);
  }

  protected getTaskCardDisplayValue(displayValue: TaskCardDisplayValue): string {
    if (!displayValue) {
      return '';
    }

    return this.getValueWithTemplate(displayValue.template, displayValue.sources, displayValue.templateIsValue);
  }

  protected getValueWithTemplate(tempalate: string, sources: string[], templateIsValue: boolean): string {
    if (templateIsValue) {
      return tempalate;
    }

    const templateValues = sources.map((source) => get(this.dataSource, source, ''));
    return templateValues.reduce<string>((prev, curr, currInd) => prev.replace(`{${currInd}}`, curr), tempalate);
  }
}
