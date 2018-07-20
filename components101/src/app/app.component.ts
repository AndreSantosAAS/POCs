import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <h1>Hey guys</h1>
  <p>
    {{myObject.location}}
  </p>
  <!--
  <ul>
    <li *ngFor="let arr of myArr"> {{arr}}</li>
  </ul>
  <ul>
    <li *ngIf="myArr; else otherTmpl"> Yeah, I exist.</li>
  </ul>
  <ul>
    <li *ngIf="myArr == 'something'"> Yeah, I exist2.</li>
  </ul>
  -->
  <div *ngIf="myArr; then tmpl1 else tmpl2">
    
  </div>
  <ng-template #tmpl1>True. The myArr content is {{myArr}}</ng-template>
  <ng-template #tmpl2>False</ng-template>
  <ng-template #otherTmpl>No, I do.</ng-template>
  `
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myObject = {
    gender: 'male',
    age: 35,
    location: 'Brazil'
  };
  // myArr=['him', 'hers','yours'];
  myArr='something';
  //myArr = false;
}
