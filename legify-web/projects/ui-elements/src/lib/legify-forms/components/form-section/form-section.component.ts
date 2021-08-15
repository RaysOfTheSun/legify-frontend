import { AfterContentInit, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'legify-web-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss']
})
export class FormSectionComponent implements AfterContentInit, OnInit {
  @Output() handleLoad: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.handleLoad.emit(true);
  }
}
