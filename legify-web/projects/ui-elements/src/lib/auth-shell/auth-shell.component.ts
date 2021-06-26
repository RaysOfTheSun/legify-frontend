import { Component, Input, OnInit } from '@angular/core';
import { AuthShellFooterItem } from './models';

@Component({
  selector: 'legify-web-auth-shell',
  templateUrl: './auth-shell.component.html',
  styleUrls: ['./auth-shell.component.scss']
})
export class AuthShellComponent implements OnInit {
  @Input() svgIconName = '';
  @Input() bannerImgSrc = '';
  @Input() footerItems: AuthShellFooterItem[] = [];

  constructor() {}

  ngOnInit(): void {}

  get svgIcon(): string {
    return this.svgIconName || 'legify-logo';
  }
}
