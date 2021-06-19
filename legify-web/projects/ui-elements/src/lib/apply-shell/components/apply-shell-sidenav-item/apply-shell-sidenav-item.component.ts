import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ApplyShellSidenavItem } from '@legify/web-core';

@Component({
  selector: 'legify-web-apply-shell-sidenav-item',
  templateUrl: './apply-shell-sidenav-item.component.html',
  styleUrls: ['./apply-shell-sidenav-item.component.scss']
})
export class ApplyShellSidenavItemComponent implements OnInit {
  @Input() navItem: ApplyShellSidenavItem;
  @Input() navItemCompleteIndicatorTemplate: TemplateRef<HTMLDivElement>;

  constructor() {}

  ngOnInit(): void {}
}
