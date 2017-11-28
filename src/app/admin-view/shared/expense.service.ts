import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { ExpenseData } from 'app/admin-view/models/expenseData';
import { FundDetails } from 'app/admin-view/models/fundDetails';
import { read } from 'fs';
import { ExtraDetails } from 'app/admin-view/models/extraDetails';

@Injectable()
export class ExpenseService {
    sendExpense: ExpenseData[] = new Array<ExpenseData>();
    sendFund: FundDetails[] = new Array<FundDetails>();
    sendExtraDetails: ExtraDetails[] = new Array<ExtraDetails>();
    expenseArray: ExpenseData[] = new Array<ExpenseData>();
    expenseBaseUrl: string = 'http://mh.truevoters.in/WebServices/Expense.svc';
    basicBaseUrl: string = 'http://mh.truevoters.in/WebServices/BasicData.svc';
    storageEl: any;
    storageArr: any[] = [];

    constructor(private http: Http) {
        console.log('ExpenseService Intialized!!!!');
    }

    addExpenseData(expense: ExpenseData): Observable<any> {
        this.sendExpense[0] = expense;
        console.log(this.expenseArray);
        console.log(JSON.stringify(this.sendExpense));
        return this.http.post(this.expenseBaseUrl + '/InsertDailyExpense/ExpData', JSON.stringify(this.sendExpense))
                .map(res => res.json()['InsertDailyExpenseResult']);
    }

    addFundDetails(fund: FundDetails): Observable<any> {
        console.log(fund);
        this.sendFund[0] = fund;
        console.log(JSON.stringify(this.sendFund));
        return this.http.post(this.expenseBaseUrl + '/InsertUpdateFundDetails/FundData', JSON.stringify(this.sendFund))
        .map(res => res.json()['InsertUpdateFundDetailsResult']);
    }

    getExpenseData(): Observable<any> {
       return this.http.get(this.expenseBaseUrl + '/GetDailyExpense?Id=&FromDate=&ToDate=&MaxId=&MobileNo=7741909862&TokenId=D29D522E-F95B-4191-BF73-440C196177B1')
                .map(res => res.json()['GetDailyExpenseResult']);
                // console.log(this.expenseArray);
    }

    getExpenseType(): Observable<any> {
        return this.http
                .get(this.expenseBaseUrl + '/DownloadExpenseType?StateId=27&MobileNo=9422325020&TokenId=15BB8580-1C3D-467D-9E82-450C37E8D6FF')
                .map(res => res.json()['DownloadExpenseTypeResult']);
    }

    getSubExpenseType(exptype: number): Observable<any> {
        return this.http
            .get(this.expenseBaseUrl + '/DownloadSubExpense?LocalBodyId=13626&DistId=521&ExpenseType=' + exptype + '&StateId=27&MobileNo=9422325020&TokenId=15BB8580-1C3D-467D-9E82-450C37E8D6FF')
            .map(res => res.json()['DownloadSubExpenseResult']);
    }

    searchExpenseData (id: number, fromDate: string, tillDate: string) {
        console.log(id, fromDate, tillDate);
    }

    searchExpenseByDate(date: string) {
        console.log(date);
        return this.http
                .get(this.expenseBaseUrl + '/DownloadDailyExpense?Date=' + date + '&MobileNo=9112019919&TokenId=7CCBA0F9-5490-4306-B814-9613ECF1417B')
                .map(res => res.json()['DownloadDailyExpenseResult']);
    }

    getFundDetails(): Observable<any> {
        return this.http
            .get(this.expenseBaseUrl + '/GetFundDetails?Id&FromDate&ToDate&MaxId=0&MobileNo=7741909862&TokenId=D29D522E-F95B-4191-BF73-440C196177B1')
            .map(res => res.json()['GetFundDetailsResult']);
    }

    getPartyName(partyTypeId: number): Observable<any> {
        return this.http
                .get(this.expenseBaseUrl + '/DownloadPartyNames?PartyType=' + partyTypeId + '&TokenId=15BB8580-1C3D-467D-9E82-450C37E8D6FF&MobileNo=9422325020')
                .map(res => res.json()['DownloadPartyNamesResult']);
    }

    insertExtraDetails(extraDetail: ExtraDetails): Observable<any> {
        this.sendExtraDetails[0] = extraDetail;
        console.log(JSON.stringify(this.sendExtraDetails));
        return this.http
                .post(this.expenseBaseUrl + '/UploadCandidateBasicDetails/CandidateData', JSON.stringify(this.sendExtraDetails))
                .map(res => res.json()['UploadCandidateBasicDetailsResult']);
    }

    downloadExtraDetails() {
        return this.http
                .get(this.expenseBaseUrl + '/DownloadCandidateBasicDetails?MobileNo=9422325020&TokenId=15BB8580-1C3D-467D-9E82-450C37E8D6FF')
                .map(res => res.json()['DownloadCandidateBasicDetailsResult']);
    }

    downloadDistrictName() {
        return this.http
                .get(this.basicBaseUrl + '/GetDistricts?StateID=27&MobileNo=7741909862&TokenId=D29D522E-F95B-4191-BF73-440C196177B1')
                .map(res => res.json()['GetDistrictsResult']);
    }

    downloadLocalBodyName(distId: number, localBodyTypeId: number) {
        return this.http
                .get(this.basicBaseUrl + '/GetLocalBodyDetailsDistWise?DistrictId=' + distId + '&LocalBodyTypeId=' + localBodyTypeId + '&MobileNo=9422325020&TokenId=15BB8580-1C3D-467D-9E82-450C37E8D6FF')
                .map(res => res.json()['GetLocalBodyDetailsDistWiseResult']);
    }
}
