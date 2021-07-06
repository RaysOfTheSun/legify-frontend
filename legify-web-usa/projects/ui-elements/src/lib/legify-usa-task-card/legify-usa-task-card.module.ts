import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegifyUsaTaskCardComponent } from './legify-usa-task-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { TranslatableTextModule } from '@legify/web-i18n-elements';

@NgModule({
  declarations: [LegifyUsaTaskCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    TranslatableTextModule
  ],
  exports: [LegifyUsaTaskCardComponent]
})
export class LegifyUsaTaskCardModule {}
