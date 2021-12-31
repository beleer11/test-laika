import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexEmployeeComponent } from './index-employee.component';

describe('IndexEmployeeComponent', () => {
  let component: IndexEmployeeComponent;
  let fixture: ComponentFixture<IndexEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
