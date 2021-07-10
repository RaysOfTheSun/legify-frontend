import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'legify-web-apply-shell-header-breadcrumb-item',
  templateUrl: './apply-shell-header-breadcrumb-item.component.html',
  styleUrls: ['./apply-shell-header-breadcrumb-item.component.scss']
})
export class ApplyShellHeaderBreadcrumbItemComponent {
  @Input() text: string;
  @Input() isLast?: boolean;

  constructor() {}

  get showSeparator(): boolean {
    return !this.isLast;
  }
}
