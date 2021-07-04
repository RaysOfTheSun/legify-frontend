import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'legify-web-nftf-status-panel',
  templateUrl: './status-panel.component.html',
  styleUrls: ['./status-panel.component.scss']
})
export class StatusPanelComponent implements OnInit {
  // TODO: implement eApplicationLink status previews
  @Input() eApplicationLinks: any[];

  @Output() hanldeSendLinkClick: EventEmitter<any[]> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public publishHandleSendLinkClick($event: Event): void {
    $event.stopPropagation();
    ($event.target as HTMLButtonElement).blur();
    this.hanldeSendLinkClick.emit(this.eApplicationLinks);
  }
}
