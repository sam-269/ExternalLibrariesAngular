import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkStringsComponent } from './work-strings.component';

describe('WorkStringsComponent', () => {
  let component: WorkStringsComponent;
  let fixture: ComponentFixture<WorkStringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkStringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkStringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
