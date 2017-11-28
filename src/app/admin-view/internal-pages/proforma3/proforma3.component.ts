import { Component, OnInit } from '@angular/core';
import { ExtraDetails } from 'app/admin-view/models/extraDetails';
import * as moment from 'moment';
import { ExpenseService } from 'app/admin-view/shared/expense.service';
declare const $;

@Component({
  selector: 'app-proforma3',
  templateUrl: './proforma3.component.html',
  styleUrls: ['./proforma3.component.scss']
})
export class Proforma3Component implements OnInit {

  public extraDetails = new ExtraDetails;
  public extraDetail: ExtraDetails[];
  // public extraDetails: ExtraDetails;
  currDate: any;

  constructor(private _expService: ExpenseService) {
    this.currDate = moment(new Date()).format('YYYY-MM-DD');
    this._expService.downloadExtraDetails().subscribe(data => {
      this.extraDetail = data;
      this.extraDetails = this.extraDetail[0];
      console.log(data);
    });
  }

  ngOnInit() {
  }

  Print() {
    var mywindow = window.open('', 'PRINT', 'height=800,width=1000');
    mywindow.document.write('<html><head><title> True Voter </title>');
    mywindow.document.write('<style type="text/css">#btnPrint { display: none; }</style>');
    mywindow.document.write('</head><body>');
    mywindow.document.write($('#divProformaData').html());
    mywindow.document.write('</body></html>');
    mywindow.print();
    mywindow.close();
    return true;
  }
}
