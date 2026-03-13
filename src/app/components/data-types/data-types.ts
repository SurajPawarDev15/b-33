import { Component } from '@angular/core';

@Component({
  selector: 'app-data-types',
  imports: [],
  templateUrl: './data-types.html',
  styleUrl: './data-types.css',
})
export class DataTypes {
  //initialization
  courseName = 'Angular';
  rollNo = 123;
  isActive = true;
  currentDate = new Date();

  //declaration + datatype + initialization
  productName: String = 'Mobile';
  isProductAvailable: boolean = false;

  //declaration only
  productPrice: number;

  student: any;
  employee = null;
  product = undefined;
  isnum = NaN;

  studentDetail: any = {
    name: 'Suraj',
    city: 'Pune',
    state: 'MHA',
  };

  cityList: string[] = ['Pune', 'Nagpur', 'Jaipur', 'Delhi'];
  rollNoArray: number[] = [10, 20, 30, 40, 50];

  constructor() {
    this.student = 'ABC';
    this.student = true;
    this.student = {};
    this.student = [];
    this.productPrice = 222;
    this.courseName = 'ReactJS';

    let rollArray = ['', ''];
    const studName = 'Some';
    //console.log(rollNoArray);
    console.log(studName);

    console.log(this.courseName);
    this.printCourseName();
    // this.printName('123');
    this.printText('this is sample text');
    const value = this.addTwoNumber(2, 5);
    alert('Additional' + value);
    const value2 = this.addTwoNum(4);
    const value3 = this.addNumbers(1, 2);
  }

  printCourseName() {
    console.log('This is from function' + this.courseName);
  }

  printText(message: string) {
    debugger;
    alert(message);
  }

  addTwoNum(num1: number, num2: number = 0) {
    return num1 + num2;
  }
  addTwoNumber(num1: number, num2: number = 0) {
    return num1 + num2;
  }

  addNumbers(num1: number, num2: number, num3?: number) {
    if (num3 != undefined) {
      return num1 + num2 + num3;
    } else {
      return num1 + num2;
    }
  }
}
