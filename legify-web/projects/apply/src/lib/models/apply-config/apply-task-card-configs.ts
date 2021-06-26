import { PERSON_ROLE } from '../../constants';
import { TASK_CARD_HIGHLIGH_COLOR } from '@legify/web-ui-elements';
import { TaskCardRowConfigs } from './task-card-row-configs';

export interface ApplyTaskCardConfigs {
  rowConfigs: TaskCardRowConfigs[];
  highlightColorToPersonTypeMap: Record<PERSON_ROLE, TASK_CARD_HIGHLIGH_COLOR>;
}
