import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedcComponent } from './homedc.component';

describe('HomedcComponent', () => {
  let component: HomedcComponent;
  let fixture: ComponentFixture<HomedcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomedcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
