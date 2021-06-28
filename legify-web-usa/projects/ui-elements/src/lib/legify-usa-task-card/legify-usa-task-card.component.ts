import { Component } from '@angular/core';
import {
  LegifyTaskCardComponent,
  LegifyTaskCardConfigService
} from '@legify/web-ui-elements';
import { AppConfigService } from '@legify/web-core';

@Component({
  selector: 'legify-usa-web-task-card',
  templateUrl: './legify-usa-task-card.component.html',
  styleUrls: ['./legify-usa-task-card.component.scss']
})
export class LegifyUsaTaskCardComponent extends LegifyTaskCardComponent {
  constructor(
    protected appConfigService: AppConfigService,
    protected taskCardConfigService: LegifyTaskCardConfigService
  ) {
    super(appConfigService, taskCardConfigService);
  }
}
