import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyDocumentUploadComponent } from './apply-document-upload.component';

describe('ApplyDocumentUploadComponent', () => {
  let component: ApplyDocumentUploadComponent;
  let fixture: ComponentFixture<ApplyDocumentUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyDocumentUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyDocumentUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
