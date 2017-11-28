import { Component, OnInit } from '@angular/core';
import { PartyDetails } from 'app/admin-view/models/partyDetails';
import { ExpenseService } from 'app/admin-view/shared/expense.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms/src/model';
import { Validators } from '@angular/forms/src/validators';
import { ExtraDetails } from 'app/admin-view/models/extraDetails';
import * as swal from 'sweetalert';

@Component({
  selector: 'app-extra-details',
  templateUrl: './extra-details.component.html',
  styleUrls: ['./extra-details.component.scss']
})
export class ExtraDetailsComponent implements OnInit {

  partyData: PartyDetails[];
  ExtraDetails: ExtraDetails[];
  extraDetail: ExtraDetails;

  extraDetails = new FormGroup({
    Name: new FormControl({value: '', disabled: true}, Validators.required),
    MobileNo: new FormControl({value: '', disabled: true}, Validators.required),
    Age: new FormControl('', Validators.required),
    NominationDate: new FormControl('', Validators.required),
    ElectionDate: new FormControl('', Validators.required),
    FatherName: new FormControl('', Validators.required),
    Place: new FormControl('', Validators.required),
    PartyTypeID: new FormControl('', Validators.required),
    PartyNameID: new FormControl('', Validators.required),
    SeatNoID: new FormControl('', Validators.required),
    ResultDate: new FormControl('', Validators.required),
    BankName: new FormControl('', Validators.required),
    BankAccNo: new FormControl('', Validators.required)
  });

  constructor(private _expService: ExpenseService) {
    this.extraDetails.patchValue({Name: 'Ramesh'}),
    this.extraDetails.patchValue({MobileNo: '7741909862'})
  }

  ngOnInit() {
  }

  getPartyName() {
    let partyTypeData = <HTMLInputElement>document.getElementById('partyType');
    console.log(partyTypeData.value);
    this._expService.getPartyName(+partyTypeData.value).subscribe(data => {
      this.partyData = data;
    });
  }

  InsertExtraDetails() {
    console.log(this.extraDetails.value);
    this.extraDetail = this.extraDetails.value;
    this.extraDetail.MobileNo = '7741909862';
    this.extraDetail.TokenId = 'D29D522E-F95B-4191-BF73-440C196177B1';
    console.log(this.extraDetail);
    this._expService.insertExtraDetails(this.extraDetail).subscribe(data => {
      console.log(data);
      this.ExtraDetails = data;
      if (this.ExtraDetails[0].Status == '106') {
        swal('Good', 'Extra Details Insertion Successful!!!!', 'success');
      } else if (this.ExtraDetails[0].Status == '103') {
        swal('Oops', 'Extra Details Insertion Failed!!!!', 'error');
      }
    });
  }
}
