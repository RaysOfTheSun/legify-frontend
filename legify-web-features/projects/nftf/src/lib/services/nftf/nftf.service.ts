import { Injectable } from '@angular/core';
import { AppConfigService } from '@legify/web-core';
import { NftfConfigService } from '../nftf-config/nftf-config.service';

@Injectable()
export class NftfService {
  constructor(
    protected appConfigService: AppConfigService,
    protected nftfConfigService: NftfConfigService
  ) {}
}
