import { NgModule } from '@angular/core';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
// import { LoginComponent } from 'app/pages/login.component';
import { RegisterComponent } from 'app/pages/register.component';

import { PagesRoutingModule } from 'app/pages/pages-routing.module';
import { LoginComponent } from 'app/pages/login/login.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [ PagesRoutingModule,
    FormsModule ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
        // FormsModule
  ]
})
export class PagesModule { }
