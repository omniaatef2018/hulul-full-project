/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AssideComponent } from './asside.component';

describe('AssideComponent', () => {
  let component: AssideComponent;
  let fixture: ComponentFixture<AssideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
