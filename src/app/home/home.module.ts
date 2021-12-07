import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { IndexComponent } from "./index/IndexComponent";
import { MaterialModule } from '../material/material.module';
import { MascotaListComponent } from './mascotas/mascota-list/mascota-list.component';
import { NewMascotaComponent } from './mascotas/new-mascota/new-mascota.component';
import { EditMascotaComponent } from './mascotas/edit-mascota/edit-mascota.component';
import { FormMascotaComponent } from './mascotas/shared/form-mascota/form-mascota.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent, IndexComponent, MascotaListComponent, NewMascotaComponent, EditMascotaComponent, FormMascotaComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule, ReactiveFormsModule],
})
export class HomeModule {}
