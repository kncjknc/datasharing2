import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataSharing2';

  parentMsg:string="";

  receivedMsg:string=" ";

  setValue(parentMs:string){
    this.parentMsg=parentMs;
  }
  
  parentMs(receivedMs:string){
    this.receivedMsg=receivedMs;
  }



}