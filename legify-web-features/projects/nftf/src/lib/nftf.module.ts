import { NgModule } from '@angular/core';
import { NftfComponent } from './nftf.component';
import { StatusPanelComponent } from './components/status-panel/status-panel.component';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NftfConfigService, NftfService } from './services';
import { SendLinkModalComponent } from './components/send-link-modal/send-link-modal.component';
import { LegifyModalModule } from '@legify/web-ui-elements';

@NgModule({
  declarations: [NftfComponent, StatusPanelComponent, SendLinkModalComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    LegifyModalModule
  ],
  exports: [NftfComponent, StatusPanelComponent],
  providers: [NftfService, NftfConfigService]
})
export class NftfModule {}
