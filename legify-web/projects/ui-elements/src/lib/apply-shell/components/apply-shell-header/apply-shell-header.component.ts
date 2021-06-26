import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'legify-web-apply-shell-header',
  templateUrl: './apply-shell-header.component.html',
  styleUrls: ['./apply-shell-header.component.scss']
})
export class ApplyShellHeaderComponent implements OnInit {
  @Input() currPersonName: string;

  constructor() {}

  ngOnInit(): void {}

  get personName(): string {
    return this.currPersonName || '';
  }
}
