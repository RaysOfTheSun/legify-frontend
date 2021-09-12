import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyTaskCardComponent } from './apply-task-card/apply-task-card.component';
import { LegifyTaskCardShellModule } from '@legify/web-ui-elements';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LegifyI18nModule } from '@legify/web-i18n';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ApplyTaskCardComponent],
  imports: [CommonModule, LegifyTaskCardShellModule, MatProgressBarModule, MatButtonModule, LegifyI18nModule],
  exports: [ApplyTaskCardComponent]
})
export class ApplyUiElementsModule {}
