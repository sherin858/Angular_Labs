import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Department } from 'src/app/models/department';
@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css'],
})
export class DepartmentDetailsComponent {
  @Input() deptDetails = new Department();
  @Output() hideOutput: EventEmitter<boolean> = new EventEmitter<boolean>();
  hideDetails() {
    this.hideOutput.emit(true);
  }
}
