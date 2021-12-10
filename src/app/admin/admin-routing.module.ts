import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { EditHistoriaclinicaComponent } from './historiasclinicas/edit-historiaclinica/edit-historiaclinica.component';
import { NewHistoriaclinicaComponent } from './historiasclinicas/new-historiaclinica/new-historiaclinica.component';
import { HistoriaclinicaListComponent } from './historiasclinicas/historiaclinica-list/historiaclinica-list.component';
<<<<<<< HEAD
import { FormEditHistoriaclinicaComponent } from './historiasclinicas/shared/form-historiaclinica/form-edit-historiaclinica.component';
=======
import { EditCitaComponent } from './citas/edit-cita/edit-cita.component';
import { NewCitaComponent } from './citas/new-cita/new-cita.component';
import { CitaListComponent } from './citas/cita-list/cita-list.component';

>>>>>>> e56c1fbffd9b0e4c7075d1fa8f7a03cc9a957800
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'HistoriaClinica',
        component: HistoriaclinicaListComponent,
      },
      {
        path: 'HistoriaClinica/new',
        component: NewHistoriaclinicaComponent,
      },
      {
        path: 'HistoriaClinica/:id/editar',
        component: EditHistoriaclinicaComponent,
      },
      {
        path: 'Citas',
        component: CitaListComponent,
      },
      {
        path: 'Citas/new',
        component: NewCitaComponent,
      },
      {
        path: 'Citas/:id/editar',
        component: EditCitaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
