import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegifyTaskCardComponent } from './legify-task-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [LegifyTaskCardComponent],
  imports: [CommonModule, MatCardModule, MatProgressBarModule],
  exports: [LegifyTaskCardComponent]
})
export class LegifyTaskCardModule {}
