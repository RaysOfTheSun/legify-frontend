import { TaskCardDisplayValue } from './task-card-display-value';
import { TaskCardRow } from './task-card-row';

export interface TaskCardConfig {
  rows: TaskCardRow[];
  footerText: TaskCardDisplayValue;
  headerText: TaskCardDisplayValue;
  taskCardClass?: string;
  subHeaderText: TaskCardDisplayValue;
  showProgressBar?: boolean;
  highlightColorKey?: TaskCardDisplayValue;
}
