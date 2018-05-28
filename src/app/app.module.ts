import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
// import { GitHeaderComponent } from './git-header/git-header.component';
// import { GitInputComponent } from './git-input/git-input.component';
import { GitFilelistComponent } from './git-filelist/git-filelist.component';
import { GitFileItemComponent } from './common-components/git-file-item/git-file-item.component';
// import { GitMenuComponent } from './git-menu/git-menu.component';
import { GitPanelComponent } from './git-panel/git-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    // GitHeaderComponent,
    // GitInputComponent,
    GitFilelistComponent,
    GitFileItemComponent,
    // GitMenuComponent,
    GitPanelComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BsDropdownModule.forRoot()
    // NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
