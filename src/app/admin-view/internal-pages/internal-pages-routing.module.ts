import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyExpenseTableComponent } from 'app/admin-view/internal-pages/daily-expense-table/daily-expense-table.component';
import { CandidateDailyExpenseComponent } from 'app/admin-view/internal-pages/candidate-daily-expense/candidate-daily-expense.component';
import { FundCollectionDetailsComponent } from 'app/admin-view/internal-pages/fund-collection-details/fund-collection-details.component';
import { FundCollectionTableComponent } from 'app/admin-view/internal-pages/fund-collection-table/fund-collection-table.component';
import { ExtraDetailsComponent } from 'app/admin-view/internal-pages/extra-details/extra-details.component';
import { PersonalExpenseComponent } from 'app/admin-view/internal-pages/personal-expense/personal-expense.component';
import { Proforma1Component } from 'app/admin-view/internal-pages/proforma1/proforma1.component';
import { Proforma3Component } from 'app/admin-view/internal-pages/proforma3/proforma3.component';
import { Proforma4Component } from 'app/admin-view/internal-pages/proforma4/proforma4.component';
import { Proforma2Component } from 'app/admin-view/internal-pages/proforma2/proforma2.component';
import { DeviationComponent } from 'app/admin-view/internal-pages/deviation/deviation.component';

const routes: Routes = [{
    path: '',
    data: {
        title: 'Pages'
    },
    children: [
        {
            path: 'dailyexpensetable',
            component: DailyExpenseTableComponent,
            data: {
                title: 'DailyExpenseTable'
            }
        },
        {
            path: 'candidatedailyexpense',
            component: CandidateDailyExpenseComponent,
            data: {
                title: 'CandidateDailyExpense'
            }
        },
        {
            path: 'fundcollectiondetails',
            component: FundCollectionDetailsComponent,
            data: {
                title: 'FundCollection'
            }
        },
        {
            path: 'fundcollectiontable',
            component: FundCollectionTableComponent,
            data: {
                title: 'FundCollectionTable'
            }
        },
        {
            path: 'extradetails',
            component: ExtraDetailsComponent,
            data: {
                title: 'ExtraDetails'
            }
        },
        {
            path: 'personalexpense',
            component: PersonalExpenseComponent,
            data: {
                title: 'PersonalExpense'
            }
        },
        {
            path: 'proforma1',
            component: Proforma1Component,
            data: {
                title: 'Proforma 1'
            }
        },
        {
            path: 'proforma2',
            component: Proforma2Component,
            data: {
                title: 'Proforma 2'
            }
        },
        {
            path: 'proforma3',
            component: Proforma3Component,
            data: {
                title: 'Proforma 3'
            }
        },
        {
            path: 'proforma4',
            component: Proforma4Component,
            data: {
                title: 'Proforma 4'
            }
        },
        {
            path: 'deviation',
            component: DeviationComponent,
            data: {
                title: 'Deviation'
            }
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class InternalPagesRoutingModule {}
