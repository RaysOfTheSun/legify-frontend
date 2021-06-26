import { Component, Input } from '@angular/core';
import { AuthShellFooterItem } from '../../models';

@Component({
  selector: 'legify-web-auth-shell-footer',
  templateUrl: './auth-shell-footer.component.html',
  styleUrls: ['./auth-shell-footer.component.scss']
})
export class AuthShellFooterComponent {
  @Input() footerItems: AuthShellFooterItem[] = [];

  constructor() {}
}
