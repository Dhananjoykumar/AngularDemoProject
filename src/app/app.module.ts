import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppRoutingModule } from './app.routing';
import { NAV_DROPDOWN_DIRECTIVES } from 'app/admin-view/commons/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from 'app/admin-view/commons/sidebar.directive';
import { AsideToggleDirective } from 'app/admin-view/commons/aside.directive';
import { BreadcrumbsComponent } from 'app/admin-view/commons/breadcrumb.component';
import { FullLayoutComponent } from 'app/admin-view/layouts/full-layout.component';
import { SimpleLayoutComponent } from 'app/admin-view/layouts/simple-layout.component';
import { AuthenticationService } from 'app/pages/service/authentication.service';
import { EncryptionService } from 'app/pages/service/encryption.service';
import { HttpModule } from '@angular/http';
import { AuthGaurdService } from 'app/pages/service/auth-gaurd.service';
import { SessionService } from 'app/pages/service/session.service';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'angular2-moment';
import { UserServiceService } from 'app/pages/service/user-service.service';
import {ModalModule} from 'ng2-bootstrap/modal';
import { LocalBodyService } from 'app/pages/service/local-body.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpModule,
    CommonModule,
    MomentModule,
    NgIdleKeepaliveModule.forRoot(),
    ModalModule.forRoot()

  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
  AuthenticationService,
  EncryptionService,
  AuthGaurdService,
  SessionService,
  UserServiceService,
  LocalBodyService
],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
