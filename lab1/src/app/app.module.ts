import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { StudentComponent } from './student/student.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidepanelComponent } from './sidepanel/sidepanel.component';

@NgModule({
  declarations: [AppComponent, DepartmentComponent, StudentComponent, HeaderComponent, FooterComponent, SidepanelComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
