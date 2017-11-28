import { NgModule } from '@angular/core';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from 'app/pages/login.component';
import { RegisterComponent } from 'app/pages/register.component';

import { PagesRoutingModule } from 'app/pages/pages-routing.module';

@NgModule({
  imports: [ PagesRoutingModule ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
  ]
})
export class PagesModule { }
