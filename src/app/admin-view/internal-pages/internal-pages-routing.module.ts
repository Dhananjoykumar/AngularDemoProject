import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: '',
    data: {
        title: 'Pages'
    },
    // children: [
    //     {
    //         path:,
    //         component:,
    //         data: {
    //             title: ''
    //         }
    //     }
    // ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class InternalPagesRoutingModule {}
