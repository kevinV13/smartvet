import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LayoutComponent } from './layout/layout.component';
import { EditMascotaComponent } from './mascotas/edit-mascota/edit-mascota.component';
import { MascotaListComponent } from './mascotas/mascota-list/mascota-list.component';
import { NewMascotaComponent } from './mascotas/new-mascota/new-mascota.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path:'mascotas',
        component: MascotaListComponent,
      },
      {
        path:'mascotas/new',
        component: NewMascotaComponent,
      },
      {
        path:'mascotas/:id/edit',
        component: EditMascotaComponent,
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
