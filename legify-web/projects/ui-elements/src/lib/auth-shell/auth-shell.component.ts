import { Component, Input, OnInit } from '@angular/core';
import { ShellFooterItem } from '@legify/web-core';

@Component({
  selector: 'legify-web-auth-shell',
  templateUrl: './auth-shell.component.html',
  styleUrls: ['./auth-shell.component.scss']
})
export class AuthShellComponent implements OnInit {
  @Input() svgIconName = '';
  @Input() bannerImgSrc = '';
  @Input() footerItems: ShellFooterItem[] = [];

  constructor() {}

  ngOnInit(): void {}

  get svgIcon(): string {
    return this.svgIconName || 'legify-logo';
  }
}
