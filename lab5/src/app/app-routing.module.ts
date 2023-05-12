import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';

const routes: Routes = [
  {
    path: 'departments',
    loadChildren: () =>
      import('./department/department.module').then((m) => m.DepartmentModule),
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'aboutus',
    component: AboutUsComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
