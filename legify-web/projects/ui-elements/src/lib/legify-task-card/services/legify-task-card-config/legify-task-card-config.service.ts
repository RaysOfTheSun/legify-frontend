import { Injectable } from '@angular/core';
import { AppConfigService } from '@legify/web-core';
import { TASK_CARD_HIGHLIGH_COLOR } from '../../constants';

@Injectable()
export class LegifyTaskCardConfigService {
  constructor(protected appConfigService: AppConfigService) {}

  public getHighlighColorFromAppConfig(
    colorKey: any
  ): TASK_CARD_HIGHLIGH_COLOR {
    const uiElementsConfigs = this.appConfigService.uiElementsConfigs;
    const colorMap = uiElementsConfigs.taskCardConfigs.highlightColorMap;

    const highlightColor = colorMap[colorKey] as TASK_CARD_HIGHLIGH_COLOR;
    return highlightColor ? highlightColor : TASK_CARD_HIGHLIGH_COLOR.BLUE;
  }
}
