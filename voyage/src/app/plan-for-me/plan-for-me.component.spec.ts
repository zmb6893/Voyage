import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanForMeComponent } from './plan-for-me.component';

describe('PlanForMeComponent', () => {
  let component: PlanForMeComponent;
  let fixture: ComponentFixture<PlanForMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanForMeComponent]
    });
    fixture = TestBed.createComponent(PlanForMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
