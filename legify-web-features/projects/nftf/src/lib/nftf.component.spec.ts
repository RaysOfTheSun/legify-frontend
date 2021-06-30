import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftfComponent } from './nftf.component';

describe('NftfComponent', () => {
  let component: NftfComponent;
  let fixture: ComponentFixture<NftfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
