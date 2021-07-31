import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyPersonalInformationComponent } from './apply-personal-information.component';
import { LegifyTaskCardCollectionModule, LegifyTaskCardModule } from '@legify/web-ui-elements';

@NgModule({
  declarations: [ApplyPersonalInformationComponent],
  imports: [CommonModule, LegifyTaskCardModule, LegifyTaskCardCollectionModule]
})
export class ApplyPersonalInformationModule {}
