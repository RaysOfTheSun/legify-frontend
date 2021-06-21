import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class IconRegistryConfigurer {
  constructor(protected domSanitizer: DomSanitizer) {}

  public register(
    matIconRegistry: MatIconRegistry,
    pathToIcon: string,
    iconName: string
  ): void {
    const sanitizedUrl =
      this.domSanitizer.bypassSecurityTrustResourceUrl(pathToIcon);
    matIconRegistry.addSvgIcon(iconName, sanitizedUrl);
  }
}
