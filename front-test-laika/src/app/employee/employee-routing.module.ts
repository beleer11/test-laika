import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexEmployeeComponent } from './index/index-employee.component';
import { CreateComponent } from './create/create-employee.component';
import { EditComponent } from './edit/edit-employee.component';

const routes: Routes = [
  {path: 'employee', redirectTo: 'employee/index', pathMatch: 'full'},
  {path: 'employee/index', component: IndexEmployeeComponent},
  {path: 'employee/create', component: CreateComponent},
  {path: 'employee/edit/:idEmployee', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EmployeeRoutingModule { }
