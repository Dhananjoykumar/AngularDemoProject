import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminViewComponent } from 'app/admin-view/admin-view.component';

const routes: Routes = [{
    path: '',
    component: AdminViewComponent,
    data: {
        title: 'Admin'
    }
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminViewRoutingModule {}
