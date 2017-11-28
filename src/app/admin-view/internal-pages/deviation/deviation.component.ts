import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms/src/model';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms/src/validators';
import { ExpenseData } from 'app/admin-view/models/expenseData';
import { ExpenseService } from 'app/admin-view/shared/expense.service';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-deviation',
  templateUrl: './deviation.component.html',
  styleUrls: ['./deviation.component.scss']
})
export class DeviationComponent implements OnInit {

  deviationReport = new FormGroup({
    DistId: new FormControl('', Validators.required),
    LocalBodyId: new FormControl('', Validators.required),
    LocalBodyTypeId: new FormControl('', Validators.required),
    Date: new FormControl('', Validators.required),
    ReportType: new FormControl('', Validators.required),
    WardNo: new FormControl('', Validators.required)
  });

  districtData: ExpenseData[] = [];
  localBodyName: ExpenseData[] = [];

  constructor(private _expService: ExpenseService) {
    this._expService.downloadDistrictName().subscribe(data => {
      this.districtData = data;
      console.log(this.districtData);
    });
  }

  ngOnInit() {
  }

  onLocalBodyTypeChange() {
    console.log(this.deviationReport.get('DistId').value);
    console.log(this.deviationReport.get('LocalBodyTypeId').value);
    this._expService.downloadLocalBodyName(this.deviationReport.get('DistId').value, this.deviationReport.get('LocalBodyTypeId').value)
    .subscribe(data => {
      this.localBodyName = data;

    });
  }

  searchReportData() {
    console.log(this.deviationReport.value);
  }

}
