import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName: string = 'Angular 21';
  courseDuration: string = '3 Months';
  myInputType: string = 'text';
  myClassName = 'col-2 bg-danger';

  minChar = 4;
  maxCharAllowed = 4;
  selectedCity = '';
  isActive = true;

  changeCourseName(name: string) {
    this.courseName = name;
  }
  showWelcomeText() {
    alert('welcome B-33 class');
  }
  showMessage(message: string) {
    alert(message);
  }
  onCityChanged() {
    alert('City Changed');
  }
}
