import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';

import { HomeComponent } from './components/views/home/home.component';
import { InventariosComponent } from './components/views/inventarios/inventarios.component';
import { ItemInventarioComponent } from './components/views/item-inventario/item-inventario.component';
// import { NuevoPerfilComponent } from './components/views/nuevo-perfil/nuevo-perfil.component';
// import { PerfilComponent } from './components/views/perfil/perfil.component';
import { MiPerfilComponent } from './components/views/mi-perfil/mi-perfil.component';
import { ReportesComponent } from './components/views/reportes/reportes.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: { animation: 'SideBPage'},
    children: [
      {
        path: '',
        component: HomeComponent,
        data: { animation: 'HomePage'}
      },
      {
        path: 'inventarios',
        component: InventariosComponent,
        data: { animation: 'ToDashboard'}
      },
      {
        path: 'item-inventario',
        component: ItemInventarioComponent,
        data: { animation: 'SideBPage'}
      },
      {
        path: 'mi-perfil',
        component: MiPerfilComponent,
      },
      /*
      {
        path: 'perfil',
        component: PerfilComponent,
        data: { animation: 'SideBPage'}
      },
      {
        path: 'nuevo-perfil',
        component: NuevoPerfilComponent,
        data: { animation: 'ToDashboard'}
      },
      */
      {
        path: 'reportes',
        component: ReportesComponent,
        data: { animation: 'SideBPage'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
