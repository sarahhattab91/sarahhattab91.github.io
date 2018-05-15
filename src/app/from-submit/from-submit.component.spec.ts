import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromSubmitComponent } from './from-submit.component';

describe('FromSubmitComponent', () => {
  let component: FromSubmitComponent;
  let fixture: ComponentFixture<FromSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
