import { Component, Output, EventEmitter } from '@angular/core';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
})
export class AddDepartmentComponent {
  dept: Department = new Department();
  @Output() newDept: EventEmitter<Department> = new EventEmitter<Department>();
  addDepartment() {
    this.newDept.emit(this.dept);
  }
}
