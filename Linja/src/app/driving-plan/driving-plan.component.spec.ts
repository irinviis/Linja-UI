import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingPlanComponent } from './driving-plan.component';

describe('DrivingPlanComponent', () => {
  let component: DrivingPlanComponent;
  let fixture: ComponentFixture<DrivingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivingPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrivingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
