import { Component, EventEmitter, Output } from '@angular/core';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent {
  departments: Department[] = [
    new Department(1, 'department 1', 'location 1'),
    new Department(2, 'department 2', 'location 2'),
    new Department(3, 'department 3', 'location 3'),
    new Department(4, 'department 4', 'location 4'),
  ];
  deptDetails: Department = new Department();
  deptToEdit: Department = new Department();
  detailsFlag: boolean = false;
  showDetails(id: number) {
    this.departments.forEach((dept) => {
      if (dept.id == id) {
        this.deptDetails = dept;
        this.detailsFlag = true;
      }
    });
  }
  hideDetails() {
    this.detailsFlag = false;
  }
  addDept(dept: Department) {
    this.departments.push(dept);
  }
  removeDept(id: number) {
    for (let i = 0; i < this.departments.length; i++) {
      if (this.departments[i].id == id) this.departments.splice(i, 1);
    }
  }
  editDept(dept: Department) {
    this.departments.forEach((d, i) => {
      if (d.id == dept.id) {
        this.departments[i].Name = dept.Name;
        this.departments[i].Location = dept.Location;
      }
    });
  }
  sendEditDepartment(id: number) {
    this.departments.forEach((d, i) => {
      if (d.id == id) {
        this.deptToEdit.id = this.departments[i].id;
        this.deptToEdit.Name = this.departments[i].Name;
        this.deptToEdit.Location = this.departments[i].Location;
      }
    });
  }
}
