import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  childMsg:string="";

  @Input() receivedMsg="";

  @Output() eventmsg = new EventEmitter<string>;

  sendToParent(childMs:string){
    // this.childMsg=childMs;
    this.eventmsg.emit(childMs);

  }
 
  constructor(private service:ServiceService){}

  setNames(name:string){
    
    this.service.name.push(name);
  }
}
