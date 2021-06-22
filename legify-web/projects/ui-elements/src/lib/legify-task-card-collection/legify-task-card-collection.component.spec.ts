import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegifyTaskCardCollectionComponent } from './legify-task-card-collection.component';

describe('LegifyTaskCardCollectionComponent', () => {
  let component: LegifyTaskCardCollectionComponent;
  let fixture: ComponentFixture<LegifyTaskCardCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegifyTaskCardCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegifyTaskCardCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
