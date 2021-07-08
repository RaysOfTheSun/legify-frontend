import { NgModule } from '@angular/core';
import { NftfComponent } from './nftf.component';
import { StatusPanelComponent } from './components/status-panel/status-panel.component';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { NftfConfigService, NftfService } from './services';
import { SendLinkModalComponent } from './components/send-link-modal/send-link-modal.component';
import { LegifyButtonModule, LegifyModalModule } from '@legify/web-ui-elements';

@NgModule({
  declarations: [NftfComponent, StatusPanelComponent, SendLinkModalComponent],
  imports: [
    CommonModule,
    MatIconModule,
    LegifyModalModule,
    LegifyButtonModule,
    MatExpansionModule
  ],
  exports: [NftfComponent, StatusPanelComponent],
  providers: [NftfService, NftfConfigService]
})
export class NftfModule {}
