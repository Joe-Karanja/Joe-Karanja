import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomPopUpComponent } from './recom-pop-up.component';

describe('RecomPopUpComponent', () => {
  let component: RecomPopUpComponent;
  let fixture: ComponentFixture<RecomPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
