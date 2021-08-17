import { Component, OnInit } from '@angular/core';
import { FormGroupComponent } from '../form-group/form-group.component';

@Component({
  selector: 'legify-web-birth-info-form-group',
  templateUrl: './birth-info-form-group.component.html',
  styleUrls: ['./birth-info-form-group.component.scss']
})
export class BirthInfoFormGroupComponent extends FormGroupComponent implements OnInit {
  ngOnInit(): void {}
}
