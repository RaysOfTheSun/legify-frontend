import { NgModule } from '@angular/core';
import { NftfComponent } from './nftf.component';
import { StatusPanelComponent } from './components/status-panel/status-panel.component';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NftfConfigService, NftfService } from './services';

@NgModule({
  declarations: [NftfComponent, StatusPanelComponent],
  imports: [CommonModule, MatExpansionModule, MatIconModule, MatButtonModule],
  exports: [NftfComponent, StatusPanelComponent],
  providers: [NftfService, NftfConfigService]
})
export class NftfModule {}
