import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegifyUsaTaskCardComponent } from './legify-usa-task-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LegifyUsaTaskCardComponent],
  imports: [CommonModule, MatCardModule, MatProgressBarModule, MatButtonModule],
  exports: [LegifyUsaTaskCardComponent]
})
export class LegifyUsaTaskCardModule {}
