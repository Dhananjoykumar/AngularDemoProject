import { Component, OnInit } from '@angular/core';
import { FundDetails } from 'app/admin-view/models/fundDetails';
import { FormGroup, FormControl } from '@angular/forms/src/model';
import { Validators } from '@angular/forms/src/validators';
import { ExpenseService } from 'app/admin-view/shared/expense.service';
import { ResultData } from 'app/admin-view/models/result';
import * as swal from 'sweetalert';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-fund-collection-details',
  templateUrl: './fund-collection-details.component.html',
  styleUrls: ['./fund-collection-details.component.scss']
})
export class FundCollectionDetailsComponent implements OnInit {

  fundDetail = new FundDetails;
  tempFund = new FundDetails;
  fundDetails: FundDetails[];
  submitToggleCounter: number;
  editIndex;
  isEditable: boolean;
  result: ResultData;

  fundCollection = new FormGroup({
    Date: new FormControl('', Validators.required),
    FromWhom: new FormControl('', Validators.required),
    FundType: new FormControl('', Validators.required),
    PaidBy: new FormControl('', Validators.required),
    Amount: new FormControl('', Validators.required),
    CheckNo: new FormControl('', Validators.required),
    ProviderBankName: new FormControl('', Validators.required),
    ProviderName: new FormControl('', Validators.required),
    ProviderMobileNo: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.required)
  });

  constructor(private _expService: ExpenseService, private router: Router) {
    this.isEditable = false;
    console.log('FundCollection constructor intialized!!!!');
    // this.fundDetails = [
    //   {
    //   FundId: 1,
    //   FDate: '2017-11-04',
    //   From: 3,
    //   FundType: 1,
    //   PaidBy: 2,
    //   Amount: 100,
    //   ChequeNo: 'C12348644',
    //   ProviderBankName: 'SBI',
    //   ProviderName: 'ABC',
    //   MobileNo: '48614561',
    //   address: 'Pune',
    //   isActive: 1
    // }
  // ];
    console.log('Inside init!!!!');
    // console.log(this.fundDetails.length);
  }

  ngOnInit() {
  }

  onSelectFromItem() {
    var fieldName = <HTMLInputElement>document.getElementById('selectFrom');

    var bankName = <HTMLInputElement>document.getElementById('bankname-input');
    var bankLabel = <HTMLInputElement>document.getElementById('bankname-label');
    var providerName = <HTMLInputElement>document.getElementById('providername-input');
    var providerLabel = <HTMLInputElement>document.getElementById('providername-label');
    var providerMobNoName = <HTMLInputElement>document.getElementById('providermobno-input');
    var providerMobNoLabel = <HTMLInputElement>document.getElementById('providermobno-label');

    if (fieldName.value == '1' || fieldName.value == '2') {
      bankName.style.visibility = 'hidden';
      bankLabel.style.visibility = 'hidden';
      providerName.style.visibility = 'hidden';
      providerLabel.style.visibility = 'hidden';
      providerMobNoName.style.visibility = 'hidden';
      providerMobNoLabel.style.visibility = 'hidden';
    } else {
      bankName.style.visibility = 'visible';
      bankLabel.style.visibility = 'visible';
      providerName.style.visibility = 'visible';
      providerLabel.style.visibility = 'visible';
      providerMobNoName.style.visibility = 'visible';
      providerMobNoLabel.style.visibility = 'visible';
    }
  }

  onSelectPaidBy() {
    var fieldName = <HTMLInputElement>document.getElementById('selectPaidBy');

    var chequeDetails = <HTMLInputElement>document.getElementById('chequedetails-input');
    var chequeDetailsLabel = <HTMLInputElement>document.getElementById('chequedetails-label');

    if (fieldName.value != '2') {
      chequeDetails.style.visibility = 'hidden';
      chequeDetailsLabel.style.visibility = 'hidden';
    } else {
      chequeDetails.style.visibility = 'visible';
      chequeDetailsLabel.style.visibility = 'visible';
    }
  }
  
  activateFund(i) {
    if (this.fundDetails[i].IsActive == 0) {
      this.fundDetails[i].IsActive = 1;
    } else {
      this.fundDetails[i].IsActive = 0;
    }
  }
// model: any = {};
// model2: any = {};
  insertFundDetail() {
    var status: number;
    this.fundDetail = this.fundCollection.value;
    this.fundDetail.IMEINo = '0';
    this.fundDetail.IsActive = 1;
    this.fundDetail.MobileNo = '7741909862';
    this.fundDetail.TokenId = 'D29D522E-F95B-4191-BF73-440C196177B1';
    this._expService.addFundDetails(this.fundDetail).subscribe(data => {
      this.result = data;
      console.log(data[0]);
      status = +this.result[0].Status;
      if (status == 106) {
        swal('Hurray', 'Fund Detail Insertion Successfull!!!!', 'success');
        this.router.navigateByUrl('/internalpages/fundcollectiontable');
      } else if (status == 105) {
        swal('Oops', 'Fund Detail Insertion Failed!!!!', 'error');
      }
      // console.log(this.result);
    });
    // console.log(status);
    // this.router.navigateByUrl('/components/fundcollectiontable');
    // this.fundDetails.push(this.model);
    // this.fundDetail = new FundDetails;
    // this.router.navigateByUrl('/components/fundcollectiontable');
    // this.model = {};
  }

  // editFundDetail(id: number) {
  //   console.log(this.fundDetails.length);
  //   this.isEditable = true;
  //   // console.log(this.fundDetails.length);
  //   // for (var i = 0;i < this.fundDetails.length; i++) {
  //   //   if (this.fundDetails[i].FundId == id) {
  //       // index = i;
  //       // this.tempFund = new FundDetails;
  //       // console.log(this.fundDetails[id]);
  //       this.model2.FundId = this.fundDetails[id].FundId;
  //       this.model2.FDate = this.fundDetails[id].FDate;
  //       this.model2.From = this.fundDetails[id].From;
  //       this.model2.FundType = this.fundDetails[id].FundType;
  //       this.model2.Amount = this.fundDetails[id].Amount;
  //       this.model2.ChequeNo = this.fundDetails[id].ChequeNo;
  //       this.model2.ProviderBankName = this.fundDetails[id].ProviderBankName;
  //       this.model2.ProviderName = this.fundDetails[id].ProviderName;
  //       this.model2.address = this.fundDetails[id].address;
  //       this.model2.PaidBy = this.fundDetails[id].PaidBy;
  //       this.model2.MobileNo = this.fundDetails[id].MobileNo;
  //       this.model2.isActive = this.fundDetails[id].isActive;
  //       this.editIndex = id;
  //       // this.tempFund = new FundDetails;
  //       // console.log(this.tempFund);
  //     //   break;
  //   //   } else {
  //   //     continue;
  //   //   }
  //   // }
  // }

  // updateFundDetail() {
  //   // console.log(id);
  //   // this.submitToggleCounter = 0;
  //   this.isEditable = false;
  //   // for (var i = 0;i < this.fundDetails.length; i++) {
  //   //   if (this.fundDetails[i].FundId == id) {
  //       // index = i;
  //       // this.tempFund = this.fundDetail;
  //       // console.log(this.fundDetails[this.editIndex]);
  //       // this.fundDetails[this.editIndex].FundId = this.tempFund.FundId;
  //       // this.fundDetails[this.editIndex].FDate = this.tempFund.FDate;
  //       // this.fundDetails[this.editIndex].From = this.tempFund.From;
  //       // this.fundDetails[this.editIndex].FundType = this.tempFund.FundType;
  //       // this.fundDetails[this.editIndex].PaidBy = this.tempFund.PaidBy;
  //       // this.fundDetails[this.editIndex].Amount = this.tempFund.Amount;
  //       let k = this.editIndex;
  //       // for (let i = 0; i < this.fundDetails.length; i++) {
  //       //   console.log(i);
  //       //   if (i == k) {
  //           this.fundDetails[k] = this.model2;
  //           this.model2 = {};
  //       //   }
  //       // }
  //       // this.tempFund = new FundDetails;
  //       // this.fundDetails[this.editIndex].ChequeNo = this.tempFund.ChequeNo;
  //       // this.fundDetails[this.editIndex].ProviderBankName = this.tempFund.ProviderBankName;
  //       // this.fundDetails[this.editIndex].ProviderName = this.tempFund.ProviderName;
  //       // this.fundDetails[this.editIndex].MobileNo = this.tempFund.MobileNo;
  //       // this.fundDetails[this.editIndex].address = this.tempFund.address;
  //       // this.fundDetails[this.editIndex].isActive = this.tempFund.isActive;
  //   //     break;
  //   //   } else {
  //   //     continue;
  //   //   }
  //   // }
  // }
}
