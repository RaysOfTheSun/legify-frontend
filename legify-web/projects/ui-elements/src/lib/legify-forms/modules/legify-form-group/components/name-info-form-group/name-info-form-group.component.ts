import { Component, OnInit } from '@angular/core';
import { FormGroupComponent } from '../form-group/form-group.component';

@Component({
  selector: 'legify-web-name-info-form-group',
  templateUrl: './name-info-form-group.component.html',
  styleUrls: ['./name-info-form-group.component.scss']
})
export class NameInfoFormGroupComponent extends FormGroupComponent implements OnInit {
  ngOnInit(): void {}
}
