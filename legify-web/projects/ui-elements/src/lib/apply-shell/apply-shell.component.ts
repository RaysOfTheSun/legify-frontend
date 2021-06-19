import { Component, Input, OnInit } from '@angular/core';
import { Person, ApplyShellSidenavItem } from '@legify/web-core';

@Component({
  selector: 'legify-web-apply-shell',
  templateUrl: './apply-shell.component.html',
  styleUrls: ['./apply-shell.component.scss']
})
export class ApplyShellComponent implements OnInit {
  @Input() person: Person;
  @Input() navItems: ApplyShellSidenavItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
