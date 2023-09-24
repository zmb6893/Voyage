import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePlanComponent } from './choose-plan.component';

describe('ChoosePlanComponent', () => {
  let component: ChoosePlanComponent;
  let fixture: ComponentFixture<ChoosePlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoosePlanComponent]
    });
    fixture = TestBed.createComponent(ChoosePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
