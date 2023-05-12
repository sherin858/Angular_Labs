import { Injectable } from '@angular/core';
import { Department } from '../models/department';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  baseUrl: string = 'https://localhost:7010/api/Department/';
  constructor(public http: HttpClient) {}
  departments: Department[] = [
    new Department(1, 'department 1', 'location 1'),
    new Department(2, 'department 2', 'location 2'),
    new Department(3, 'department 3', 'location 3'),
    new Department(4, 'department 4', 'location 4'),
  ];
  getDepartments() {
    //return this.departments;
    return this.http.get<Department[]>(this.baseUrl);
  }
  getDepartment(id: number) {
    // for (let i = 0; i < this.departments.length; i++) {
    //   if (this.departments[i].id == id) return this.departments[i];
    // }
    // return null;
    return this.http.get<Department>(this.baseUrl + id);
  }
  addDepartment(department: Department) {
    // this.departments.push(department);
    return this.http.post(this.baseUrl, department);
  }
  removeDepartment(id: number) {
    // for (let i = 0; i < this.departments.length; i++) {
    //   if (this.departments[i].id == id) this.departments.splice(i, 1);
    // }
    this.http.delete(this.baseUrl + id).subscribe(() => {
      window.location.reload();
    });
  }
  editDepartment(dept: Department | null) {
    // this.departments.forEach((d, i) => {
    //   if (d.id == dept?.id) {
    //     this.departments[i].name = dept.name;
    //     this.departments[i].location = dept.location;
    //   }
    // });
    return this.http.put(this.baseUrl + dept?.id, dept);
  }
}
