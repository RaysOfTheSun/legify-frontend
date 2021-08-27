import { Component, Input, OnInit } from '@angular/core';
import { LegifyTranslationService } from '@legify/web-i18n';

@Component({
  selector: 'legify-web-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  @Input() text: string;
  @Input() textClass?: string;
  @Input() translationParams: Record<string, any>;

  constructor(protected translationService: LegifyTranslationService) {}

  ngOnInit(): void {}

  get textContent(): string {
    return this.translationService.translate(this.text, this.translationParams);
  }
}
