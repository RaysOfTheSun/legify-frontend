import { Component, Input, OnInit } from '@angular/core';
import { LegifyTranslationService } from '@legify/web-i18n';

@Component({
  selector: 'legify-web-i18n-translatable-text',
  templateUrl: './translatable-text.component.html',
  styleUrls: ['./translatable-text.component.scss']
})
export class TranslatableTextComponent implements OnInit {
  @Input() translatableTextId: string;
  @Input() translationProps: Record<string, string>;

  constructor(protected translationService: LegifyTranslationService) {}

  ngOnInit(): void {}

  get translatedText(): string {
    return this.translationService.translate(
      this.translatableTextId,
      this.translationProps
    );
  }
}
