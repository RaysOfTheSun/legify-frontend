import { Component, Input, OnInit, Type } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormGroupComponent } from '@legify/web-ui-elements';

@Component({
  selector: 'legify-web-isnured-basic-info-form',
  templateUrl: './isnured-basic-info-form.component.html',
  styleUrls: ['./isnured-basic-info-form.component.scss']
})
export class IsnuredBasicInfoFormComponent implements OnInit {
  @Input() dataSource: any;
  @Input() form: FormGroup;
  @Input() sections: FormGroupComponent[];

  constructor() {}

  ngOnInit(): void {}
}
