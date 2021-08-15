import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRendererComponent } from './lazy-renderer.component';
import { ComponentLoaderService } from './services';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [LazyRendererComponent],
  imports: [CommonModule, MatProgressSpinnerModule, MatProgressBarModule],
  exports: [LazyRendererComponent],
  providers: [ComponentLoaderService]
})
export class LegifyLazyRendererModule {}
