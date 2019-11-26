import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountableValuesComponent } from './countable-values.component';

describe('CountableValuesComponent', () => {
  let component: CountableValuesComponent;
  let fixture: ComponentFixture<CountableValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountableValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountableValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
