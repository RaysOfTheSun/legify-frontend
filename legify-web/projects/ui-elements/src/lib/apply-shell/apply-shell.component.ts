import { Component, Input, OnInit } from '@angular/core';
import { ApplyShellConfig } from './models/apply-shell-config';
import { ApplyShellSidenavItem } from './models/apply-shell-sidenav-item';
import { get } from 'lodash-es';

@Component({
  selector: 'legify-web-apply-shell',
  templateUrl: './apply-shell.component.html',
  styleUrls: ['./apply-shell.component.scss']
})
export class ApplyShellComponent implements OnInit {
  @Input() config: ApplyShellConfig;
  @Input() navItems: ApplyShellSidenavItem[] = [];

  constructor() {}

  ngOnInit(): void {}

  get currPersonName(): string {
    return get(this.config.dataSource, this.config.avatarNameValuePath, '-');
  }
}
