import { TaskCardRow } from './task-card-row';

export interface TaskCardConfig {
  rows: TaskCardRow[];
  headerText: string;
  taskCardClass?: string;
  subHeaderText: string;
  highlightColor: string;
  showProgressBar?: boolean;
  footerHeaderText?: string;
}
