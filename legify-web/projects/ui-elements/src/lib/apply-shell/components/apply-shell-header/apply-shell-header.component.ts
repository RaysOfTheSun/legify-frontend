import { Component, Input, OnInit } from '@angular/core';
import { Person } from '@legify/web-core';

@Component({
  selector: 'legify-web-apply-shell-header',
  templateUrl: './apply-shell-header.component.html',
  styleUrls: ['./apply-shell-header.component.scss']
})
export class ApplyShellHeaderComponent implements OnInit {
  @Input() person: Person;

  constructor() {}

  ngOnInit(): void {}

  public getPersonInitials(): string {
    if (!this.person || !this.person.personalInformation) {
      return '-';
    }

    return `${this.person.personalInformation.firstName} ${this.person.personalInformation.lastName}`;
  }
}
