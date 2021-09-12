import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from '../../../models';

@Component({
  selector: 'legify-web-apply-task-card',
  templateUrl: './apply-task-card.component.html',
  styleUrls: ['./apply-task-card.component.scss']
})
export class ApplyTaskCardComponent implements OnInit {
  @Input()
  owner: Customer;

  @Input()
  progress: number;

  @Output()
  clicked: EventEmitter<Customer> = new EventEmitter();

  public customerName: string;

  ngOnInit(): void {
    this.customerName = `${this.owner.personalInfo.nameInfo.first} ${this.owner.personalInfo.nameInfo.last}`;
  }

  public handleClicked(): void {
    this.clicked.emit(this.owner);
  }
}
