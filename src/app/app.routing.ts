import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from 'app/admin-view/layouts/full-layout.component';
import { SimpleLayoutComponent } from 'app/admin-view/layouts/simple-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './admin-view/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'internalpages',
        loadChildren: './admin-view/internal-pages/internal-pages.module#InternalPagesModule'
      },
      {
        path: 'admin',
        loadChildren: './admin-view/admin-view.module#AdminViewModule'
      },
      // {
      //   path: 'widgets',
      //   loadChildren: './widgets/widgets.module#WidgetsModule'
      // },
      // {
      //   path: 'charts',
      //   loadChildren: './chartjs/chartjs.module#ChartJSModule'
      // }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: 'app/pages/pages.module#PagesModule',
    //     // ./extra-pages.module#ExtraPagesModule
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
