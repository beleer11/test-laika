import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPositionComponent } from './index/index-position.component';
import { CreatePositionComponent } from './create/create-position.component';
import { EditPositionComponent } from './edit/edit-position.component';

const routes: Routes = [
  {path: 'position', redirectTo: 'position/index', pathMatch: 'full'},
  {path: 'position/index', component: IndexPositionComponent},
  {path: 'position/create', component: CreatePositionComponent},
  {path: 'position/edit/:idCargo', component: EditPositionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionRoutingModule { }
