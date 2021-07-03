import { Component, OnInit } from '@angular/core';
import { NftfConfigService } from './services';

@Component({
  selector: 'legify-web-nftf-nftf',
  templateUrl: './nftf.component.html',
  styles: []
})
export class NftfComponent implements OnInit {
  constructor(protected nftfConfigService: NftfConfigService) {}

  ngOnInit(): void {}

  public isFeatureEnabled(): boolean {
    return this.nftfConfigService.isFeatureEnabled;
  }
}
