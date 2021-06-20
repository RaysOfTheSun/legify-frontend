import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'legify-web-auth-shell-header',
  templateUrl: './auth-shell-header.component.html',
  styleUrls: ['./auth-shell-header.component.scss']
})
export class AuthShellHeaderComponent implements OnInit {
  @Input() headerText = '';
  @Input() svgIconName = '';

  constructor() {}

  get svgIcon(): string {
    return this.svgIconName;
  }

  ngOnInit(): void {}
}
