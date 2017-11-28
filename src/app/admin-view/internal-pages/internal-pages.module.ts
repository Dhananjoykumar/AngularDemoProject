import { NgModule } from '@angular/core';
import { InternalPagesRoutingModule } from 'app/admin-view/internal-pages/internal-pages-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ModalModule} from 'ng2-bootstrap/modal';
import { LocalBodyComponent } from './local-body/local-body.component';
import { LolocalBodyTableComponent } from './lolocal-body-table/lolocal-body-table.component';
import {Ng2PaginationModule} from 'ng2-pagination';
import { LoadingModule } from 'ngx-loading';

@NgModule({
    imports: [
        InternalPagesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ModalModule.forRoot(),
        Ng2PaginationModule,
        LoadingModule
    ],
    declarations: [LocalBodyComponent, LolocalBodyTableComponent]
})
export class InternalPagesModule {
}
