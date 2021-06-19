import { Component, Input, OnInit } from '@angular/core';
import { ApplyShellSidenavItem } from '@legify/web-core';

@Component({
  selector: 'lib-apply',
  templateUrl: './apply.component.html',
  styles: []
})
export class ApplyComponent implements OnInit {
  @Input() navItems: ApplyShellSidenavItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.navItems = [
      {
        key: '0',
        name: 'Personal Information',
        disabled: false,
        routerLink: [''],
        showCompleteIndicator: true
      },
      {
        key: '0',
        name: 'Terms and Conditions',
        disabled: false,
        routerLink: [''],
        showCompleteIndicator: true
      },
      {
        key: '0',
        name: 'Disclosure',
        disabled: false,
        routerLink: [''],
        showCompleteIndicator: true
      },
      {
        key: '0',
        name: 'Supporting Documents',
        disabled: false,
        routerLink: ['documents'],
        showCompleteIndicator: false
      },
      {
        key: '0',
        name: 'Review and Sign',
        disabled: false,
        routerLink: [''],
        showCompleteIndicator: true
      },
      {
        key: '0',
        name: 'Submission',
        disabled: false,
        routerLink: [''],
        showCompleteIndicator: true
      }
    ];
  }
}
