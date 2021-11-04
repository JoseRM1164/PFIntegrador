import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ChartsModule } from 'ng2-charts';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { SidebarComponent } from './components/partials/sidebar/sidebar.component';
import { HomeComponent } from './components/views/home/home.component';
import { InventariosComponent } from './components/views/inventarios/inventarios.component';
// import { PerfilComponent } from './components/views/perfil/perfil.component';
import { ReportesComponent } from './components/views/reportes/reportes.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { NavDashboardComponent } from './components/partials/nav-dashboard/nav-dashboard.component';
// import { NuevoPerfilComponent } from './components/views/nuevo-perfil/nuevo-perfil.component';
import { ItemInventarioComponent } from './components/views/item-inventario/item-inventario.component';
import { MiPerfilComponent } from './components/views/mi-perfil/mi-perfil.component';
import { SingleInventarioComponent } from './components/partials/single-inventario/single-inventario.component';
import { CurrencyInfoComponent } from './components/partials/currency-info/currency-info.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    HomeComponent,
    InventariosComponent,
    // PerfilComponent,
    ReportesComponent,
    FooterComponent,
    NavDashboardComponent,
    // NuevoPerfilComponent,
    ItemInventarioComponent,
    MiPerfilComponent,
    SingleInventarioComponent,
    CurrencyInfoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class DashboardModule { }
