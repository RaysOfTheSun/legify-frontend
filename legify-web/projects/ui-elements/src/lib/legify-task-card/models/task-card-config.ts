import { TaskCardRow } from './task-card-row';

export interface TaskCardConfig {
  rows: TaskCardRow[];
  headerText: string;
  taskCardClass?: string;
  highlightColor: string;
  footerHeaderText?: string;
  showProgressBar?: boolean;
}
