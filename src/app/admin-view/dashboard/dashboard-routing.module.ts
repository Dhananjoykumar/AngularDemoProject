import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/admin-view/dashboard/dashboard.component';
import { AuthGaurdService } from 'app/pages/service/auth-gaurd.service';

// import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGaurdService],
    data: {
      title: 'Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
