import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'legify-web-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() captionId = '';
  @Input() staticText = '';
  @Input() buttonType = 'button';
  @Input() isSecondary = false;

  @Output() handleClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  get cssClasses(): string[] {
    return this.isSecondary
      ? ['legify-button', 'legify-button--secondary']
      : ['legify-button', 'legify-button--primary'];
  }

  public publishClickEvent($event: Event): void {
    ($event.target as HTMLButtonElement).blur();
    this.handleClick.emit($event);
  }
}
