import { NgModule } from '@angular/core';
import { InternalPagesRoutingModule } from 'app/admin-view/internal-pages/internal-pages-routing.module';
import { DailyExpenseTableComponent } from './daily-expense-table/daily-expense-table.component';
import { CommonModule } from '@angular/common/src/common_module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CandidateDailyExpenseComponent } from './candidate-daily-expense/candidate-daily-expense.component';
import { FundCollectionDetailsComponent } from './fund-collection-details/fund-collection-details.component';
import { FundCollectionTableComponent } from './fund-collection-table/fund-collection-table.component';
import { ExtraDetailsComponent } from './extra-details/extra-details.component';
import { PersonalExpenseComponent } from './personal-expense/personal-expense.component';
import { ModalModule } from 'ng2-bootstrap/modal';
import { Proforma1Component } from './proforma1/proforma1.component';
import { Proforma3Component } from './proforma3/proforma3.component';
import { Proforma4Component } from './proforma4/proforma4.component';
import { Proforma2Component } from './proforma2/proforma2.component';
import { DeviationComponent } from './deviation/deviation.component';
import {Ng2PaginationModule} from 'ng2-pagination';
import { LoadingModule } from 'ngx-loading';

@NgModule({
    imports: [
        InternalPagesRoutingModule,
         CommonModule,
         FormsModule,
         ReactiveFormsModule,
         ModalModule.forRoot(),
         Ng2PaginationModule,
         LoadingModule
        ],
    declarations: [
        DailyExpenseTableComponent,
        CandidateDailyExpenseComponent,
        FundCollectionDetailsComponent,
        FundCollectionTableComponent,
        ExtraDetailsComponent,
        PersonalExpenseComponent,
        Proforma1Component,
        Proforma3Component,
        Proforma4Component,
        Proforma2Component,
        DeviationComponent
    ]
})
export class InternalPagesModule { }
