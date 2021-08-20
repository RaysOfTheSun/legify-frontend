import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploaderGroupComponent } from './file-uploader-group.component';

describe('FileUploaderGroupComponent', () => {
  let component: FileUploaderGroupComponent;
  let fixture: ComponentFixture<FileUploaderGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploaderGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploaderGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
