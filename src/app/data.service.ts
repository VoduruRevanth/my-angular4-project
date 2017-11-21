import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = ["I20","Verna","I10","Elantra","Xcent","Sonata","Tuscon","Santafe","Creta"];

  myDataList(){
   return 'You can get data from service';
  }

}
