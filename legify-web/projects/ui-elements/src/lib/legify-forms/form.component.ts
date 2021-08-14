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

  public countDownTimer$;

  constructor(protected formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      nameInfo: this.formBuilder.group({
        first: ['', [Validators.required]],
        middle: ['', [Validators.required]],
        last: ['', [Validators.required]],
        fullName: ['', []]
      })
    });

    this.formGroup.valueChanges.subscribe(console.log);
  }

  ngOnInit(): void {}
}
