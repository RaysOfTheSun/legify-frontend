import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { TaskCardConfig } from '../models';

@Component({
  selector: 'legify-web-task-card-collection',
  templateUrl: './legify-task-card-collection.component.html',
  styleUrls: ['./legify-task-card-collection.component.scss']
})
export class LegifyTaskCardCollectionComponent {
  @Input() dataSource: any[];
  @Input() taskCardConfig: TaskCardConfig;
  @Input() taskCardTemplate: TemplateRef<any>;

  @Output() taskCardClickHandler: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.onTaskCardClick = this.onTaskCardClick.bind(this);
  }

  get hasConfig(): boolean {
    return !!this.taskCardConfig;
  }

  public getTaskCardSourceFromDataSource(taskCardIndex: number): any {
    return this.dataSource[taskCardIndex];
  }

  public getTaskCardClassFromConfig(taskCardConfig: TaskCardConfig): string {
    return taskCardConfig.taskCardClass ?? '';
  }

  public onTaskCardClick(taskCardSource: any): void {
    this.taskCardClickHandler.emit(taskCardSource);
  }

  public getShowProgressBarFromConfig(taskCardConfig: TaskCardConfig): boolean {
    return taskCardConfig.showProgressBar ?? true;
  }
}
