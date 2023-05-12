import { Injectable } from '@angular/core';
import { Department } from '../models/department';
@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor() {}
  departments: Department[] = [
    new Department(1, 'department 1', 'location 1'),
    new Department(2, 'department 2', 'location 2'),
    new Department(3, 'department 3', 'location 3'),
    new Department(4, 'department 4', 'location 4'),
  ];
  getDepartments(): Department[] {
    return this.departments;
  }
  getDepartment(id: number): Department | null {
    for (let i = 0; i < this.departments.length; i++) {
      if (this.departments[i].id == id) return this.departments[i];
    }
    return null;
  }
  addDepartment(department: Department) {
    this.departments.push(department);
  }
  removeDepartment(id: number) {
    for (let i = 0; i < this.departments.length; i++) {
      if (this.departments[i].id == id) this.departments.splice(i, 1);
    }
  }
  editDepartment(dept: Department | null) {
    this.departments.forEach((d, i) => {
      if (d.id == dept?.id) {
        this.departments[i].Name = dept.Name;
        this.departments[i].Location = dept.Location;
      }
    });
  }
}
