import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hey there!</h1>
  <p>First line of HTMl code</p>
  <div id="templateBindings">
  <p>{{ myObj.name }}</p>
  <p>List of his friends are: </p>
  <ul>
  <li *ngFor="let arr of myArr2">{{ arr.name }}</li>
  <li *ngIf="myArr">Yeah it does exists!!</li>
  </ul>
  <p *ngIf = "!isInternalUser then user else notAnUser"></p>
  <p>
  <ng-template #user>User exists</ng-template>
  <ng-template #notAnUser>User doesn't exists</ng-template>
  </p>
  </div>
  <div id="propetyBindings">
  <img src="{{ angularLogo }}" />
  <img [src]="angularLogo" />
  <img bind-src="angularLogo" />
  <button [disabled]="buttonStatus == 'disable'">Submit</button>
  <div id="eventBindings">
    <button (mouseenter)="myEvent($event)">EventBtnCheck</button>
  </div>
  <div id="classBindings">
  <p [class]="myCustomClass">Text for class binding</p>
  <p [class.long-title]="myCustomClass2">Text for class binding-second</p>
  <p [ngClass]="myCustomClasses">Text for class binding-For multiple classes</p>
  </div>
  <div id="styleBindings">
  <p [style.color]="myCustomStyle">Text for style binding</p>
  <p [style.color]="myCustomStyle2 ? 'green':'orange'">Text for class binding-second</p>
  <p [ngStyle]="myCustomStyles">Text for class binding-For multiple classes</p>
  </div>
  <p *ngFor="let car of carList">{{ car }}</p>
  <p>{{ data }}</p>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  carList:string[];
  data:string = " ";
  
myObj = {
  gender:'male',
  age:30,
  name:'Jack',
  location:'Japan'
};

myArr = ["John","Micheal","Alex","Adam"];

myArr2 = [
   {
    gender:'male',
    age:30,
    name:'John',
    location:'Japan'
  },
   {
    gender:'female',
    age:32,
    name:'Jilly',
    location:'USA'
  }
];

isInternalUser = true;

angularLogo = 'https://angular.io/assets/images/logos/angular/angular.png';

buttonStatus = 'enable';

myEvent = function(event){
console.log(event);
}

myCustomClass = 'red-title';
myCustomClass2 = true;
myCustomClasses ={
  'long-title': true,
  'title-weight':true
};

myCustomStyle = 'green';
myCustomStyle2 = false;
myCustomStyles = {
  'text-decoration':'underline',
  'cursor':'pointer',
  'text-align':'center'
};

constructor(private _dataService:DataService){

  
}

ngOnInit(){
  this.carList = this._dataService.cars;

  this.data = this._dataService.myDataList();
}

}
