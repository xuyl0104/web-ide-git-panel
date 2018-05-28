import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHeaderComponent } from './git-header.component';

describe('GitHeaderComponent', () => {
  let component: GitHeaderComponent;
  let fixture: ComponentFixture<GitHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
