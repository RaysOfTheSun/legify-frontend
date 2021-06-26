import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ApplyShellSidenavItem } from '../../models/apply-shell-sidenav-item';

@Component({
  selector: 'legify-web-apply-shell-sidenav',
  templateUrl: './apply-shell-sidenav.component.html',
  styleUrls: ['./apply-shell-sidenav.component.scss']
})
export class ApplyShellSidenavComponent implements OnInit {
  @Input() navItems: ApplyShellSidenavItem[] = [];
  @Input() navItemCompleteIndicator: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}
}
