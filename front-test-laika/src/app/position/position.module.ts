import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionRoutingModule } from './position-routing.module';
import { IndexPositionComponent } from './index/index-position.component';
import { CreatePositionComponent } from './create/create-position.component';
import { EditPositionComponent } from './edit/edit-position.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [IndexPositionComponent, CreatePositionComponent, EditPositionComponent],
  imports: [
    CommonModule,
    PositionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PositionModule { }
