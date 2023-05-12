import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/Services/department.service';
import { Department } from 'src/app/models/department';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css'],
})
export class EditDepartmentComponent {
  // @Input() dept = new Department();
  // @Output() editDept: EventEmitter<Department> = new EventEmitter<Department>();
  dept: Department | null = new Department();
  constructor(
    public deptSrv: DepartmentService,
    private ac: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.ac.params.subscribe((data) => {
      this.dept = this.deptSrv.getDepartment(data['id']);
    });
  }
  edit() {
    this.deptSrv.editDepartment(this.dept);
    this.router.navigateByUrl('/departments');
    // this.editDept.emit(this.dept);
  }
}
