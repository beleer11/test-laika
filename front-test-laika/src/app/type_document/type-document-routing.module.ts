import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexTypeDocumentComponent } from './index/index-type-document.component';
import {CreateTypeDocumentComponent} from './create/create-type-document.component';
import {EditTypeDocumentComponent} from './edit/edit-type-document.component';

const routes: Routes = [
  {path: 'type_document', redirectTo: 'type_document/index', pathMatch: 'full'},
  {path: 'type_document/index', component: IndexTypeDocumentComponent},
  {path: 'type_document/create', component: CreateTypeDocumentComponent},
  {path: 'type_document/edit/:idTypeDocument', component: EditTypeDocumentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeDocumentRoutingModule { }
