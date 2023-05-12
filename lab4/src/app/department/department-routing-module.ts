import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
const routes: Routes = [
  { path: '', component: DepartmentListComponent },
  { path: 'add', component: AddDepartmentComponent },
  { path: 'details/:id', component: DepartmentDetailsComponent },
  { path: 'edit/:id', component: EditDepartmentComponent },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentRoutingModule {}
