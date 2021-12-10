import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { EditHistoriaclinicaComponent } from './historiasclinicas/edit-historiaclinica/edit-historiaclinica.component';
import { NewHistoriaclinicaComponent } from './historiasclinicas/new-historiaclinica/new-historiaclinica.component';
import { HistoriaclinicaListComponent } from './historiasclinicas/historiaclinica-list/historiaclinica-list.component';
import { FormEditHistoriaclinicaComponent } from './historiasclinicas/shared/form-historiaclinica/form-edit-historiaclinica.component';
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
