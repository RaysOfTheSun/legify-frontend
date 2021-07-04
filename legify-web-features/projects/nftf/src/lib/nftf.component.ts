import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppConfigService } from '@legify/web-core';
import { SendLinkModalComponent } from './components/send-link-modal/send-link-modal.component';
import { NftfConfigService } from './services';

@Component({
  selector: 'legify-web-nftf-nftf',
  templateUrl: './nftf.component.html',
  styles: []
})
export class NftfComponent implements OnInit {
  constructor(
    protected matDialog: MatDialog,
    protected appConfigService: AppConfigService,
    protected nftfConfigService: NftfConfigService
  ) {}

  ngOnInit(): void {}

  public isFeatureEnabled(): boolean {
    return this.nftfConfigService.isFeatureEnabled;
  }

  public showSendApplicationLinkModal(): void {
    this.matDialog.open(
      SendLinkModalComponent,
      this.appConfigService.modalConfigs
    );
  }
}
