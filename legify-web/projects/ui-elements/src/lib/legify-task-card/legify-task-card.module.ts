import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegifyTaskCardComponent } from './legify-task-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LegifyTaskCardConfigService } from './services';
import { TranslatableTextModule } from '@legify/web-i18n-elements';

@NgModule({
  declarations: [LegifyTaskCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    TranslatableTextModule
  ],
  exports: [LegifyTaskCardComponent],
  providers: [LegifyTaskCardConfigService]
})
export class LegifyTaskCardModule {}
