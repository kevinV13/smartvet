import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NewHistoriaclinicaComponent } from './historiasclinicas/new-historiaclinica/new-historiaclinica.component';
import { HistoriaclinicaListComponent } from './historiasclinicas/historiaclinica-list/historiaclinica-list.component';
import { EditHistoriaclinicaComponent } from './historiasclinicas/edit-historiaclinica/edit-historiaclinica.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { FormHistoriaclinicaComponent } from './historiasclinicas/shared/form-historiaclinica/form-historiaclinica.component';
//import { FormEditHistoriaclinicaComponent } from './historiasclinicas/shared/form-historiaclinica/form-edit-historiaclinica.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CitaListComponent } from './citas/cita-list/cita-list.component';
import { EditCitaComponent } from './citas/edit-cita/edit-cita.component';
import { NewCitaComponent } from './citas/new-cita/new-cita.component';
import { FormCitaComponent } from './citas/shared/form-cita/form-cita.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HistoriaclinicaListComponent,
    NewHistoriaclinicaComponent,
    EditHistoriaclinicaComponent,
    FormHistoriaclinicaComponent,
    //FormEditHistoriaclinicaComponent,
    CitaListComponent,
    EditCitaComponent,
    NewCitaComponent,
    FormCitaComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
