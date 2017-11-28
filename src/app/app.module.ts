import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
// import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
// import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
// import { AsideToggleDirective } from './shared/aside.directive';
// import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
// import { FullLayoutComponent } from './layouts/full-layout.component';
// import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { NAV_DROPDOWN_DIRECTIVES } from 'app/admin-view/commons/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from 'app/admin-view/commons/sidebar.directive';
import { AsideToggleDirective } from 'app/admin-view/commons/aside.directive';
import { BreadcrumbsComponent } from 'app/admin-view/commons/breadcrumb.component';
import { FullLayoutComponent } from 'app/admin-view/layouts/full-layout.component';
import { SimpleLayoutComponent } from 'app/admin-view/layouts/simple-layout.component';
import { CandidateDailyExpenseComponent } from 'app/admin-view/internal-pages/candidate-daily-expense/candidate-daily-expense.component';
import { ExpenseService } from 'app/admin-view/shared/expense.service';
import { HttpModule } from '@angular/http/src/http_module';
import { FormBuilder } from '@angular/forms/src/form_builder';
import { FundCollectionDetailsComponent } from 'app/admin-view/internal-pages/fund-collection-details/fund-collection-details.component';
// import { LoginComponent } from './login/login.component';
// import { AdminViewComponent } from './admin-view/admin-view.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    // LoginComponent,
    // AdminViewComponent,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
  CandidateDailyExpenseComponent,
  ExpenseService,
  FormBuilder,
  FundCollectionDetailsComponent
],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
