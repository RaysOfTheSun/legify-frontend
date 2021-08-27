import { Component, Inject, Input, OnInit } from '@angular/core';
import { L10nLocale, L10N_LOCALE } from 'angular-l10n';

@Component({
  selector: 'legify-web-i18n-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  @Input() textId: string;
  @Input() textClass?: string;
  @Input() translationParams?: Record<string, any>;

  constructor(@Inject(L10N_LOCALE) public currLocale: L10nLocale) {}

  ngOnInit(): void {}
}
