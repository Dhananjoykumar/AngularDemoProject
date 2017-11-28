import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalBodyComponent } from 'app/admin-view/internal-pages/local-body/local-body.component';
import { LolocalBodyTableComponent } from 'app/admin-view/internal-pages/lolocal-body-table/lolocal-body-table.component';

const routes: Routes = [{
    path: '',
    data: {
        title: 'Pages'
    },
    children: [
        {
            path: 'local-body',
            component: LocalBodyComponent,
            data: {
                title: 'LOCALBODY'
            }
        },
        {
            path: 'local-body-table',
            component: LolocalBodyTableComponent,
            data: {
                title: 'LOCALBODY DATA'
            }
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class InternalPagesRoutingModule {}
