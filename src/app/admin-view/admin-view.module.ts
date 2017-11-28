import { NgModule } from '@angular/core';
import { AdminViewRoutingModule } from 'app/admin-view/admin-view-routing.module';
import { AdminViewComponent } from 'app/admin-view/admin-view.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports: [AdminViewRoutingModule],
    declarations: [
        AdminViewComponent,
        // DashboardComponent
    ]
})
export class AdminViewModule {}
