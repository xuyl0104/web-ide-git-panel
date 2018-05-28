import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitFileItemComponent } from './git-file-item.component';

describe('GitFileItemComponent', () => {
  let component: GitFileItemComponent;
  let fixture: ComponentFixture<GitFileItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitFileItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitFileItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
