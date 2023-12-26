import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeeListComponent } from './employeee-list.component';

describe('EmployeeeListComponent', () => {
  let component: EmployeeeListComponent;
  let fixture: ComponentFixture<EmployeeeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeeListComponent]
    });
    fixture = TestBed.createComponent(EmployeeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
