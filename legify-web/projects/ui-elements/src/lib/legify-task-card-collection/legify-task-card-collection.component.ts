import { Component, Input, TemplateRef } from '@angular/core';
import { TaskCardConfig } from '@legify/web-core';

@Component({
  selector: 'legify-web-task-card-collection',
  templateUrl: './legify-task-card-collection.component.html',
  styleUrls: ['./legify-task-card-collection.component.scss']
})
export class LegifyTaskCardCollectionComponent {
  @Input() dataSource: any[];
  @Input() taskCardConfigs: TaskCardConfig[];
  @Input() taskCardTemplate: TemplateRef<any>;

  constructor() {}

  public getTaskCardSourceFromDataSource(taskCardIndex: number): any {
    return this.dataSource[taskCardIndex];
  }

  public getTaskCardClassFromConfig(taskCardConfig: TaskCardConfig): string {
    return taskCardConfig.taskCardClass ?? '';
  }

  public getShowProgressBarFromConfig(taskCardConfig: TaskCardConfig): boolean {
    return taskCardConfig.showProgressBar ?? true;
  }
}
