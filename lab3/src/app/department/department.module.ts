import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { FormsModule } from '@angular/forms';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentDetailsComponent,
    AddDepartmentComponent,
    EditDepartmentComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [DepartmentListComponent],
})
export class DepartmentModule {}
