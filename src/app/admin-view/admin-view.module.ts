import { NgModule } from '@angular/core';
import { AdminViewRoutingModule } from 'app/admin-view/admin-view-routing.module';
import { AdminViewComponent } from 'app/admin-view/admin-view.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { MomentModule } from 'angular2-moment';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [AdminViewRoutingModule, MomentModule, CommonModule],
    declarations: [AdminViewComponent]
})
export class AdminViewModule {}
