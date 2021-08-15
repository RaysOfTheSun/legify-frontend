import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'legify-web-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() dataSource: any;

  public formGroup: FormGroup;

  constructor(protected formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      nameInfo: this.formBuilder.group({
        title: ['Mister'],
        surname: ['Rayos del Sol', []],
        givenName: ['Carl Ivan', []]
      }),
      generalInfo: this.formBuilder.group({
        age: [22],
        gender: ['Male'],
        dateOfBirth: ['05/20/1999']
      })
    });

    this.formGroup.valueChanges.subscribe(console.log);
  }

  ngOnInit(): void {}
}
