import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { IndexEmployeeComponent } from './index/index-employee.component';
import { CreateComponent } from './create/create-employee.component';
import { EditComponent } from './edit/edit-employee.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [IndexEmployeeComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EmployeeModule { }
