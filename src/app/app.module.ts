import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { GitFilelistComponent } from './git-filelist/git-filelist.component';
import { GitFileItemComponent } from './common-components/git-file-item/git-file-item.component';
import { GitPanelComponent } from './git-panel/git-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    GitFilelistComponent,
    GitFileItemComponent,
    GitPanelComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
