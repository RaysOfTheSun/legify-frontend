import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploaderPreviewComponent } from './file-uploader-preview.component';

describe('FileUploaderPreviewComponent', () => {
  let component: FileUploaderPreviewComponent;
  let fixture: ComponentFixture<FileUploaderPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploaderPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploaderPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
