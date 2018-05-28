import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitInputComponent } from './git-input.component';

describe('GitInputComponent', () => {
  let component: GitInputComponent;
  let fixture: ComponentFixture<GitInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
