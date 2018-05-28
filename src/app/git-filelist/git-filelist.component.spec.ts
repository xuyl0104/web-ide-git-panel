import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitFilelistComponent } from './git-filelist.component';

describe('GitFilelistComponent', () => {
  let component: GitFilelistComponent;
  let fixture: ComponentFixture<GitFilelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitFilelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitFilelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
