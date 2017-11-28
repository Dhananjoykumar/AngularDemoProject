import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';

// import { DashboardComponent } from './dashboard.component';
import { DashboardComponent } from 'app/admin-view/dashboard/dashboard.component';
import { DashboardRoutingModule } from 'app/admin-view/dashboard/dashboard-routing.module';
// import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    DropdownModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
