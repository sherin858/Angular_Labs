import { Component, Output, EventEmitter } from '@angular/core';
import { DepartmentService } from 'src/app/Services/department.service';
import { Department } from 'src/app/models/department';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
})
export class AddDepartmentComponent {
  dept: Department = new Department();
  constructor(public deptSrv: DepartmentService, private router: Router) {}
  // @Output() newDept: EventEmitter<Department> = new EventEmitter<Department>();
  addDepartment() {
    // this.newDept.emit(this.dept);
    this.deptSrv.addDepartment(this.dept);
    this.router.navigateByUrl('/departments');
  }
}
