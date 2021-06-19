import { Component, Input, OnInit } from '@angular/core';
import { ApplyShellSidenavItem } from './models/apply-shell-nav-item';

@Component({
  selector: 'legify-web-apply-shell',
  templateUrl: './apply-shell.component.html',
  styleUrls: ['./apply-shell.component.scss']
})
export class ApplyShellComponent implements OnInit {
  @Input() navItems: ApplyShellSidenavItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
