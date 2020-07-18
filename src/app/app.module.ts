import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { NewchildComponent } from './newchild/newchild.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    NewchildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
