import { Component, OnInit } from '@angular/core';
import { FundDetails } from 'app/admin-view/models/fundDetails';
import { FundCollectionDetailsComponent } from 'app/admin-view/internal-pages/fund-collection-details/fund-collection-details.component';
import { Router } from '@angular/router';
import { ExpenseService } from 'app/admin-view/shared/expense.service';
import { FormGroup, FormControl } from '@angular/forms/src/model';
import { Validators } from '@angular/forms/src/validators';
import { validateConfig } from '@angular/router/src/config';
import { ResultData } from 'app/admin-view/models/result';
import { last } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-fund-collection-table',
  templateUrl: './fund-collection-table.component.html',
  styleUrls: ['./fund-collection-table.component.scss']
})
export class FundCollectionTableComponent implements OnInit {

  fundDetails: FundDetails[] = [];
  fundData = new FundDetails;
  updateIndex: number;
  result: ResultData;

  editFundData = new FormGroup({
    // FundID: new FormControl(''),
    Date: new FormControl('', Validators.required),
    // FromWhom: new FormControl('', Validators.required),
    FromWhomText: new FormControl('', Validators.required),
    // FundType: new FormControl('', Validators.required),
    FundTypeText: new FormControl('', Validators.required),
    Amount: new FormControl('', Validators.required),
    PaidBy: new FormControl('', Validators.required),
    CheckNo: new FormControl('', Validators.required),
    ProviderBankName: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.required),
    ProviderMobileNo: new FormControl('', Validators.required),
    // IsActive: new FormControl('', Validators.required),
    // CreatedDate: new FormControl('', Validators.required),
    // IMEINo: new FormControl('', Validators.required),
    // ModifiedBy: new FormControl('', Validators.required),
    // ModifiedDate: new FormControl('', Validators.required),
    // ProviderMobileNo: new FormControl('', Validators.required),
    // ProviderName: new FormControl('', Validators.required),
    // Status: new FormControl('', Validators.required),
    // TokenId: new FormControl('', Validators.required)
  });

  constructor(public fundDetailForm: FundCollectionDetailsComponent, private router: Router, private _expService: ExpenseService) {
    // this.fundDetails = [
    //   {
    //   FundId: 1,
    //   Date: '2017-11-04',
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
    this.getFundData();
   }

  ngOnInit() {
  }

  addNewFund() {
    this.router.navigateByUrl('/internalpages/fundcollectiondetails');
  }

  getFundData() {
    this._expService.getFundDetails().subscribe(data => {
      this.fundDetails = data;
      console.log(data);
    });
  }

  editFund(myModal, id: number) {
    myModal.show();
    for (let i = 0;i < this.fundDetails.length; i++) {
      if (id == this.fundDetails[i].FundID) {
        this.updateIndex = i;
        console.log(this.fundDetails[i].ProviderMobileNo);
        this.editFundData.patchValue({Date: this.fundDetails[i].Date});
        this.editFundData.patchValue({FromWhomText: this.fundDetails[i].FromWhomText});
        this.editFundData.patchValue({FundTypeText: this.fundDetails[i].FundTypeText});
        this.editFundData.patchValue({Amount: this.fundDetails[i].Amount});
        this.editFundData.patchValue({PaidBy: this.fundDetails[i].PaidBy});
        this.editFundData.patchValue({CheckNo: this.fundDetails[i].CheckNo});
        this.editFundData.patchValue({ProviderBankName: this.fundDetails[i].ProviderBankName});
        this.editFundData.patchValue({Address: this.fundDetails[i].Address});
        this.editFundData.patchValue({ProviderMobileNo: this.fundDetails[i].ProviderMobileNo});
      }
    }
  }

  activateFund(id: number) {
    console.log(id);
    for (let i = 0;i < this.fundDetails.length;i++) {
      if (id == this.fundDetails[i].FundID) {
        console.log(this.fundDetails[i]);
        if (this.fundDetails[i].IsActive == 0) {
          this.fundDetails[i].IsActive = 1;
          this.fundDetails[i].TokenId = 'D29D522E-F95B-4191-BF73-440C196177B1';
          console.log(this.fundDetails[i]);
          this._expService.addFundDetails(this.fundDetails[i]).subscribe(data => {
            this.result = data;
            console.log(this.result);
          });
        } else {
          this.fundDetails[i].IsActive = 0;
          this.fundDetails[i].TokenId = 'D29D522E-F95B-4191-BF73-440C196177B1';
          console.log(this.fundDetails[i]);
          this._expService.addFundDetails(this.fundDetails[i]).subscribe(data => {
            this.result = data;
            console.log(this.result);
          });
        }
      } else {
        continue;
      }
    }
    // if (this.fundDetails[i].IsActive == 0) {
    //   this.fundDetails[i].IsActive = 1;
    // } else {
    //   this.fundDetails[i].IsActive = 0;
    // }
  }

  updateData(myModal) {
    this.fundData = this.editFundData.value;
    // console.log(this.fundDetails[this.updateIndex]);
    this.fundData.FundID = this.fundDetails[this.updateIndex].FundID;
    this.fundData.FromWhom = this.fundDetails[this.updateIndex].FromWhom;
    this.fundData.FundType = this.fundDetails[this.updateIndex].FundType;
    this.fundData.IsActive = this.fundDetails[this.updateIndex].IsActive;
    this.fundData.CreatedDate = this.fundDetails[this.updateIndex].CreatedDate;
    this.fundData.IMEINo = this.fundDetails[this.updateIndex].IMEINo;
    this.fundData.ModifiedBy = this.fundDetails[this.updateIndex].ModifiedBy;
    this.fundData.ModifiedDate = this.fundDetails[this.updateIndex].ModifiedDate;
    this.fundData.MobileNo = this.fundDetails[this.updateIndex].MobileNo;
    this.fundData.ProviderName = this.fundDetails[this.updateIndex].ProviderName;
    this.fundData.Status = "0";
    this.fundData.TokenId = 'D29D522E-F95B-4191-BF73-440C196177B1';
    console.log(this.fundData);
    this._expService.addFundDetails(this.fundData).subscribe(data => {
      this.result = data;
      console.log(this.result);

      let status: number;
      status = +this.result[0].Status;
      if (status == 106) {
        swal('Hurray', 'Record Updated!!!!', 'success');
      } else if (status == 105) {
        swal('Oops', 'Fund Detail Insertion Failed!!!!', 'error');
      }

      this.getFundData();
    });
    myModal.hide();
  }
}
