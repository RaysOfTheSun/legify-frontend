import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextListComponent } from './text-list.component';

@NgModule({
  declarations: [TextListComponent],
  imports: [CommonModule],
  exports: [TextListComponent]
})
export class LegifyTextListModule {}
