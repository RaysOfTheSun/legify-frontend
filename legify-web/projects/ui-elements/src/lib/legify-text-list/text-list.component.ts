import { Component, Input, OnInit } from '@angular/core';
import { LegifyTranslationService } from '@legify/web-i18n';

@Component({
  selector: 'legify-web-text-list',
  templateUrl: './text-list.component.html',
  styleUrls: ['./text-list.component.scss']
})
export class TextListComponent implements OnInit {
  @Input() header: string;
  @Input() items: string[];
  @Input() disableAutoTranslate?: boolean;

  constructor(protected translationService: LegifyTranslationService) {}

  ngOnInit(): void {}

  get listItems(): string[] {
    return this.items.map((item) => this.translationService.translate(item, null));
  }

  get listHeader(): string {
    return this.translationService.translate(this.header, null);
  }
}
