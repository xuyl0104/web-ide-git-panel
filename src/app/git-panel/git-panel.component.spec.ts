import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitPanelComponent } from './git-panel.component';

describe('GitPanelComponent', () => {
  let component: GitPanelComponent;
  let fixture: ComponentFixture<GitPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
