import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { ModalContentDirective, ModalFooterDirective, ModalHeaderDirective } from '../../directives';

@Component({
  selector: 'legify-web-modal-shell',
  templateUrl: './modal-shell.component.html',
  styleUrls: ['./modal-shell.component.scss']
})
export class ModalShellComponent implements OnInit {
  @Input()
  headerTextId: string;

  @Input()
  removePaddings: boolean;

  @Input()
  headerTextTranslationProps: Record<string, any>;

  @ContentChild(ModalFooterDirective, { read: TemplateRef, static: true })
  public modalFooterTemplate: TemplateRef<any>;

  @ContentChild(ModalHeaderDirective, { read: TemplateRef, static: true })
  public modalHeaderTemplate: TemplateRef<any>;

  @ContentChild(ModalContentDirective, { read: TemplateRef, static: true })
  public modalContentTemplate: TemplateRef<any>;

  public modalHeaderCssClasses: string[] = [];

  public modalFooterCssClasses: string[] = [];

  public modalContentCssClasses: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.modalContentCssClasses = this.modalFooterTemplate
      ? ['legify-modal__body']
      : ['legify-modal__body', 'legify-modal__body--no-footer'];

    this.modalHeaderCssClasses = this.modalHeaderTemplate
      ? ['legify-modal__header']
      : ['legify-modal__header', 'legify-modal__header--no-content'];

    if (this.removePaddings) {
      this.modalContentCssClasses.push('legify-modal__body--no-padding');
    }
  }
}
