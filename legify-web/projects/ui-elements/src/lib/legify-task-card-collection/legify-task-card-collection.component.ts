import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'legify-web-task-card-collection',
  templateUrl: './legify-task-card-collection.component.html',
  styleUrls: ['./legify-task-card-collection.component.scss']
})
export class LegifyTaskCardCollectionComponent implements OnInit {
  // TODO: iplement data source for task cards
  @Input() taskCardSource: any = [];
  @Input() taskCardTemplate: TemplateRef<any>;

  // TODO: create a TaskCardConfig model
  @Input() taskCardFieldsCollection: any[][] = [];

  constructor() {}

  ngOnInit(): void {}
}
