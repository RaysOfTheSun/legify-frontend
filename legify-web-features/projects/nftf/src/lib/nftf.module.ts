import { NgModule } from '@angular/core';
import { NftfComponent } from './nftf.component';
import { StatusPanelComponent } from './components/status-panel/status-panel.component';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NftfComponent, StatusPanelComponent],
  imports: [CommonModule, MatExpansionModule, MatIconModule, MatButtonModule],
  exports: [NftfComponent, StatusPanelComponent]
})
export class NftfModule {}
