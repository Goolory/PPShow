/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserPaperComponent } from './user-paper.component';

describe('UserPaperComponent', () => {
  let component: UserPaperComponent;
  let fixture: ComponentFixture<UserPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
