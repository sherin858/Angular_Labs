import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DepartmentModule } from './department/department.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DepartmentModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
