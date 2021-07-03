import { Injectable } from '@angular/core';
import { NftfConfigService } from '../nftf-config/nftf-config.service';

@Injectable()
export class NftfService {
  constructor(protected nftfConfigService: NftfConfigService) {}
}
