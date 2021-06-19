import { Component, Input, OnInit } from '@angular/core';
import { ApplyShellSidenavItem } from '@legify/web-ui-elements';

@Component({
  selector: 'legify-web-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  @Input() navItems: ApplyShellSidenavItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
