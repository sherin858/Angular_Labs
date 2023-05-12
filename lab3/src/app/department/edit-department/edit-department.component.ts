import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css'],
})
export class EditDepartmentComponent {
  @Input() dept = new Department();
  @Output() editDept: EventEmitter<Department> = new EventEmitter<Department>();
  edit() {
    this.editDept.emit(this.dept);
  }
}
