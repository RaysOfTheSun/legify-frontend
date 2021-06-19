import { Component, OnInit } from '@angular/core';
import { ApplyShellComponent } from '@legify/web-ui-elements';

@Component({
  selector: 'lib-apply',
  template: ` <p>apply works!</p> `,
  styles: [],
})
export class ApplyComponent implements OnInit {
  public ref: ApplyShellComponent;

  constructor() {}

  ngOnInit(): void {}
}
