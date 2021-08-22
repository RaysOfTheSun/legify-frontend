import { Component, Input, OnInit } from '@angular/core';
import { FormGroupComponent } from '../form-group/form-group.component';

@Component({
  selector: 'legify-web-identification-info-form-group',
  templateUrl: './identification-info-form-group.component.html',
  styleUrls: ['./identification-info-form-group.component.scss']
})
export class IdentificationInfoFormGroupComponent extends FormGroupComponent implements OnInit {
  @Input() identificationTypes: string[];
  ngOnInit(): void {}
}
