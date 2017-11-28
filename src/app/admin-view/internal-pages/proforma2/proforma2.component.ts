import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ExpenseService } from 'app/admin-view/shared/expense.service';
import { ExtraDetails } from 'app/admin-view/models/extraDetails';
declare const $;

@Component({
  selector: 'app-proforma2',
  templateUrl: './proforma2.component.html',
  styleUrls: ['./proforma2.component.scss']
})
export class Proforma2Component implements OnInit {

  extraDetails = new ExtraDetails;
  extraDetail: ExtraDetails[];
  currDate: any;

  constructor(private _expService: ExpenseService) {
    this.currDate = moment(new Date()).format('YYYY-MM-DD');
    this._expService.downloadExtraDetails().subscribe(data => {
      this.extraDetail = data;
      this.extraDetails = this.extraDetail[0];
    });
  }

  ngOnInit() {
  }

  Print() {
    var mywindow = window.open('', 'PRINT', 'height=800,width=1000');
    mywindow.document.write('<html><head><title> True Voter </title>');
    mywindow.document.write('<style type="text/css">#btnPrint { display: none; }' +
     '#dataTable thead th, #dataTable tbody td {border:1px solid #000; padding:0.5em;} #dataTable {border-collapse: collapse}'+
     '#footer{text-align: right;}</style>');
    mywindow.document.write('</head><body>');
    mywindow.document.write($('#divProformaData').html());
    mywindow.document.write('</body></html>');
    mywindow.print();
    mywindow.close();
    return true;
  }

}
