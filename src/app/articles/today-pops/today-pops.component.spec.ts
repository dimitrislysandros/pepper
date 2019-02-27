/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodayPopsComponent } from './today-pops.component';

describe('TodayPopsComponent', () => {
  let component: TodayPopsComponent;
  let fixture: ComponentFixture<TodayPopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayPopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayPopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
