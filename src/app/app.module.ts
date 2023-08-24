import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ServiceService } from './Service/service.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
