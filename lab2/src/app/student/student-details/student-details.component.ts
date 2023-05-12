import { Component } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent {
  std: Student = new Student();
  changeId(id: any) {
    this.std.Id = parseInt(id.value);
  }
  changeName(name: any) {
    this.std.Name = name.value;
  }
  changeAge(age: any) {
    this.std.Age = age.value;
  }
}
