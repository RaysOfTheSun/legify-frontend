import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentUploadItemComponent } from './document-upload-item.component';

describe('DocumentUploadItemComponent', () => {
  let component: DocumentUploadItemComponent;
  let fixture: ComponentFixture<DocumentUploadItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentUploadItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentUploadItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
