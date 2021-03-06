import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WarningComponentComponent } from './warning-component/warning-component.component';
import { SucessComponentComponent } from './sucess-component/sucess-component.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponentComponent,
    SucessComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
