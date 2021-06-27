import { Component } from '@angular/core';
import {
  LegifyTaskCardComponent,
  TASK_CARD_HIGHLIGH_COLOR
} from '@legify/web-ui-elements';

@Component({
  selector: 'legify-usa-web-task-card',
  templateUrl: './legify-usa-task-card.component.html',
  styleUrls: ['./legify-usa-task-card.component.scss']
})
export class LegifyUsaTaskCardComponent extends LegifyTaskCardComponent {
  constructor() {
    super();
  }

  get highlight(): string {
    return TASK_CARD_HIGHLIGH_COLOR.RED;
  }
}
