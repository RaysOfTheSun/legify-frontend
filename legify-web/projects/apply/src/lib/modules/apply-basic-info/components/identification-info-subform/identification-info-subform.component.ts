import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { SubformComponent } from '@legify/web-ui-elements';
import { LegifyTranslationService } from '@legify/web-i18n';

@Component({
  selector: 'legify-web-identification-info-subform',
  templateUrl: './identification-info-subform.component.html',
  styleUrls: ['./identification-info-subform.component.scss']
})
export class IdentificationInfoSubformComponent extends SubformComponent implements OnInit {
  constructor(public controlContainer: ControlContainer, protected legifyTranslationService: LegifyTranslationService) {
    super(controlContainer);
  }

  ngOnInit(): void {}

  get selectedIdType(): string {
    return (
      this.controlContainer.control &&
      this.controlContainer.control.get(['identificationInfo', 'type']).value.toUpperCase()
    );
  }
}
