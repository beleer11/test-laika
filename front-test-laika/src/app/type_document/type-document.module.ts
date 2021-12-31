import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeDocumentRoutingModule } from './type-document-routing.module';
import { IndexTypeDocumentComponent } from './index/index-type-document.component';
import { CreateTypeDocumentComponent } from './create/create-type-document.component';
import { EditTypeDocumentComponent } from './edit/edit-type-document.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [IndexTypeDocumentComponent, CreateTypeDocumentComponent, EditTypeDocumentComponent],
  imports: [
    CommonModule,
    TypeDocumentRoutingModule,
    ReactiveFormsModule
  ]
})
export class TypeDocumentModule { }
