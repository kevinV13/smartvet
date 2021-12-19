import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { IndexComponent } from './index/index.component';
import { MaterialModule } from '../material/material.module';
import { MascotaListComponent } from './mascotas/mascota-list/mascota-list.component';
import { NewMascotaComponent } from './mascotas/new-mascota/new-mascota.component';
import { EditMascotaComponent } from './mascotas/edit-mascota/edit-mascota.component';
import { FormMascotaComponent } from './mascotas/shared/form-mascota/form-mascota.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
import { NewClienteComponent } from './clientes/new-cliente/new-cliente.component';
import { EditClienteComponent } from './clientes/edit-cliente/edit-cliente.component';
import { FormClienteComponent } from './clientes/shared/form-cliente/form-cliente.component';


@NgModule({
  declarations: [LayoutComponent, IndexComponent, MascotaListComponent, NewMascotaComponent, EditMascotaComponent, FormMascotaComponent, ClienteListComponent, NewClienteComponent, EditClienteComponent, FormClienteComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule, ReactiveFormsModule],
})
export class HomeModule {}
