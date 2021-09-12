import { Component, EventEmitter, Inject, Input, OnInit, Optional, Output } from '@angular/core';
import { TASK_CARD_HIGHLIGHT_MAPPING } from './constants';

@Component({
  selector: 'legify-web-task-card-shell',
  templateUrl: './task-card-shell.component.html',
  styleUrls: ['./task-card-shell.component.scss']
})
export class TaskCardShellComponent implements OnInit {
  @Input()
  small: boolean;

  @Input()
  dataSource: any;

  @Input()
  highlightKey: string;

  @Input()
  showHighlight = true;

  public highlightColor: string;

  constructor(@Optional() @Inject(TASK_CARD_HIGHLIGHT_MAPPING) protected hightlightMapping: Record<string, string>) {}

  ngOnInit(): void {
    this.highlightColor = this.hightlightMapping ? this.hightlightMapping[this.highlightKey] : 'GREEN';
  }
}
