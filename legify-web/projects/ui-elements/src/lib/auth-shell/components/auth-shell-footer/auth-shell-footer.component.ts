import { Component, Input, OnInit } from '@angular/core';
import { ShellFooterItem } from '@legify/web-core';

@Component({
  selector: 'legify-web-auth-shell-footer',
  templateUrl: './auth-shell-footer.component.html',
  styleUrls: ['./auth-shell-footer.component.scss']
})
export class AuthShellFooterComponent {
  @Input() footerItems: ShellFooterItem[] = [];

  constructor() {}
}
