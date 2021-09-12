import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardShellComponent } from './task-card-shell.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [TaskCardShellComponent],
  imports: [CommonModule, MatCardModule],
  exports: [TaskCardShellComponent]
})
export class LegifyTaskCardShellModule {}
