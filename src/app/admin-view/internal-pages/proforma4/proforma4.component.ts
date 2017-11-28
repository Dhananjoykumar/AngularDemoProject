import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'app/admin-view/shared/expense.service';
import { FundDetails } from 'app/admin-view/models/fundDetails';
import { ExtraDetails } from 'app/admin-view/models/extraDetails';
import * as moment from 'moment';
declare const $;

@Component({
  selector: 'app-proforma4',
  templateUrl: './proforma4.component.html',
  styleUrls: ['./proforma4.component.scss']
})
export class Proforma4Component implements OnInit {

  extraDetails = new ExtraDetails;
  extraDetail: ExtraDetails[];
  currDate: any;
  fundDetails: FundDetails[] = [];
  activeFundData: FundDetails[] = [];
  totalAmount: number = 0;

  constructor(private _expService: ExpenseService) {
    this.currDate = moment(new Date()).format('YYYY-MM-DD');
    this._expService.downloadExtraDetails().subscribe(data => {
      this.extraDetail = data;
      this.extraDetails = this.extraDetail[0];
    });

    this._expService.getFundDetails().subscribe(data => {
      this.fundDetails = data;
      // console.log(this.fundDetails);
      for (let i = 0; i < this.fundDetails.length; i++) {
        if (this.fundDetails[i].IsActive == 1) {
          this.activeFundData.push(Object.assign({}, this.fundDetails[i]));
          this.totalAmount = ((+this.totalAmount) + (+this.fundDetails[i].Amount));
          // console.log(this.totalAmount);
        } else {
          continue;
        }
      }
    });
  }

  ngOnInit() {
  }

  Print() {
    var mywindow = window.open('', 'PRINT', 'height=800,width=1000');
    mywindow.document.write('<html><head><title> True Voter </title>');
    mywindow.document.write('<style type="text/css">#btnPrint { display: none; }' +
     '#dataTable thead th, #dataTable tbody td {border:1px solid #000; padding:0.5em;} #dataTable {border-collapse: collapse}</style>');
    mywindow.document.write('</head><body>');
    mywindow.document.write($('#divProformaData').html());
    mywindow.document.write('</body></html>');
    mywindow.print();
    mywindow.close();
    return true;
  }
}
