import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IAction } from '@app/_interfaces/IAction';
import { LoggingService } from '@app/_services/logging.service';
import { Subscription } from 'rxjs';
import { map,concatMap, tap  } from 'rxjs/operators';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit,OnChanges {
  transmitAction = []
  @Input() newItem:IAction;
  display:any = []
  subscription : Subscription;
  isLoggedIn: boolean;
  data:any;
  log_count = 100
  username:string =""


  constructor(
    private loggingService: LoggingService,

  ) { }



  ngOnChanges(changes:SimpleChanges)  {
  this.loggingService.getLogs(this.log_count).subscribe(
    (data) => {
      this.display = data
    }
  )

 }
  
  ngOnInit(): void {
    this.loggingService.getLogs(this.log_count).subscribe(
      (data) => {
        this.display = data
      }
    )

}


  
    
    /*
    this.transmitAction.push(this.newItem)
    
    this.display = []
    this.transmitAction.forEach( data => { 
        this.display.push(data) ;
      });
    this.display.reverse()
  
*/  
}

