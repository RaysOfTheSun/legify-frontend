import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'legify-web-apply-documents',
  templateUrl: './apply-documents.component.html',
  styleUrls: ['./apply-documents.component.scss']
})
export class ApplyDocumentsComponent implements OnInit {
  @Input() taskCardTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}
}
