import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'legify-web-modal-shell',
  templateUrl: './legify-modal-shell.component.html',
  styleUrls: ['./legify-modal-shell.component.scss']
})
export class LegifyModalShellComponent implements OnInit {
  @Input() headerText: string;
  @Input() noPaddings: boolean;
  @Input() headerTemplate: TemplateRef<any>;
  @Input() headerTextTranslationProps: Record<string, string> = {};

  @Input() footerTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}

  get modalHeaderCssClasses(): string[] {
    return this.headerTemplate
      ? ['legify-modal__header']
      : ['legify-modal__header', 'legify-modal__header--no-content'];
  }

  get modalBodyCssClasses(): string[] {
    const initialModalBodyClasess = !!this.footerTemplate
      ? ['legify-modal__body']
      : ['legify-modal__body', 'legify-modal__body--no-footer'];

    if (!this.noPaddings) {
      return initialModalBodyClasess;
    }

    initialModalBodyClasess.push('legify-modal__body--no-padding');

    return initialModalBodyClasess;
  }
}
