import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
 <button (click)="myEvent($event)"> triggers events on 'Click' </button>
 <br/><br/>
 <button (mouseenter)="myEvent($event)"> triggers events on 'mouseenter'</button>
  `
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 myEvent(event){
   console.log(event)
 }
}
