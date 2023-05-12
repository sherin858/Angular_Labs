import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Department } from 'src/app/models/department';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/Services/department.service';
@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css'],
})
export class DepartmentDetailsComponent {
  // @Input() deptDetails = new Department();
  // @Output() hideOutput: EventEmitter<boolean> = new EventEmitter<boolean>();
  // hideDetails() {
  //   this.hideOutput.emit(true);
  // }
  deptDetails: Department | null = new Department();
  constructor(public ac: ActivatedRoute, public deptSrv: DepartmentService) {}
  ngOnInit() {
    this.ac.params.subscribe((data) => {
      this.deptDetails = this.deptSrv.getDepartment(data['id']);
    });
  }
}
