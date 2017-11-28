import { Component, OnInit, transition } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms/src/model';
import { Validators } from '@angular/forms/src/validators';
import { Expansion } from '@angular/compiler/src/ml_parser/ast';
import { Expense } from 'app/admin-view/models/expense';
import { ExpenseService } from 'app/admin-view/shared/expense.service';
import { SubExpenses } from 'app/admin-view/models/subExpense';
import { FormBuilder } from '@angular/forms/src/form_builder';
import { ExpenseData } from 'app/admin-view/models/expenseData';
import { ResultData } from 'app/admin-view/models/result';
import { DailyExpense } from 'app/admin-view/models/dailyExpense';
import * as swal from 'sweetalert';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-candidate-daily-expense',
  templateUrl: './candidate-daily-expense.component.html',
  styleUrls: ['./candidate-daily-expense.component.scss']
})
export class CandidateDailyExpenseComponent implements OnInit {

  // value: number = 10;
  flaged: boolean;
  index: number;
  expenseData: ExpenseData[] = new Array<ExpenseData>();
  expense: Expense[];
  subExp: SubExpenses[];
  data: ExpenseData;
  result: ResultData;
  data1 = new ExpenseData;
  candidateExpenseForm: FormGroup;

  constructor(private _expservice: ExpenseService,
               private _fb: FormBuilder,
               private router: Router)
               {
                  this._expservice.getExpenseType().subscribe(data => {
                    this.expense = data;
                  });
                }


  ngOnInit() {
    this.flaged = false;
    const expModel = this._expservice.storageEl;
    if (expModel) {
      this.initForm(expModel);
      this.onEditExpenseChange(expModel.ExpenseType);
      this.onEditReadOnlyActivate(expModel.PaymentType);
      this.onEditCheckPaymentMode(expModel.PaymentMode);
      this.onEditCheckSourceOfExpense(expModel.SourceOfExpense);
    } else {
      this.initForm({});
      this.onEditExpenseChange(1);
      this.onEditReadOnlyActivate(1);
      this.onEditCheckPaymentMode(1);
      this.onEditCheckSourceOfExpense('Self ');

    }
  }

  initForm(expenseData) {
    this.candidateExpenseForm = this._fb.group({
      Date: [ expenseData.Date || ''],
      ExpenseType: [expenseData.ExpenseType || ''],
      SubExpenseType: [expenseData.SubExpenseType || ''],
      StandardRate: [{value: expenseData.StandardRate, disabled: true} || {value: '', disabled: true}, [ Validators.required]],
      Unit: [{value: expenseData.Unit, disabled: true} || {value: '', disabled: true}, [ Validators.required]],
      Qty_Size_Area: [expenseData.Qty_Size_Area || ''],
      Rate: [expenseData.Rate || ''],
      PaymentType: [expenseData.PaymentType || '1'],
      PaymentMode: [expenseData.PaymentMode || '1'],
      ChequeNo: [expenseData.ChequeNo || ''],
      TotalExpense: [{value: expenseData.TotalExpense, disabled: true} || {value: '', disabled: true}, [ Validators.required]],
      PaidAmount: [expenseData.PaidAmount || ''],
      BalancePayment: [{value: expenseData.BalancePayment, disabled: true} || {value: '', disabled: true}, [ Validators.required]],
      InvoiceNo: [expenseData.InvoiceNo || ''],
      FirmName: [expenseData.FirmName || ''],
      FirmOwnerMobNo: [expenseData.FirmOwnerMobNo || ''],
      SourceOfExpense: [expenseData.SourceOfExpense || 'Self '],
      PartyName: [expenseData.PartyName || ''],
      PartyNo: [expenseData.PartyNo || ''],
      Description: [expenseData.Description || ''],
    });
  }

  readOnlyActive() {
    var fieldElement = <HTMLInputElement>document.getElementById('amount-input');
    var balanaceLabel = <HTMLInputElement>document.getElementById('balance-label');
    var balanceInput = <HTMLInputElement>document.getElementById('balance-input');
    var radioElement = <HTMLInputElement>document.getElementById('full-payment');
    let totalData = <HTMLInputElement>document.getElementById('total-input');
    if (radioElement.checked == true) {
      fieldElement.disabled = true;
      fieldElement.value = totalData.value;
      balanaceLabel.hidden = true;
      balanceInput.hidden = true;
    }
  }

  readOnlyDeactive() {
    var fieldElement = <HTMLInputElement>document.getElementById('amount-input');
    var balanaceLabel = <HTMLInputElement>document.getElementById('balance-label');
    var balanceInput = <HTMLInputElement>document.getElementById('balance-input');
    var radioElement = <HTMLInputElement>document.getElementById('partial-payment');
    if (radioElement.checked == true) {
      fieldElement.disabled = false;
      fieldElement.value = '';
      balanaceLabel.hidden = false;
      balanceInput.hidden = false;
      // balanceInput.readOnly = true;
    }
  }

  onEditReadOnlyActivate(paymentType) {
    console.log(paymentType);
    let balanaceLabel = <HTMLInputElement>document.getElementById('balance-label');
    let balanceInput = <HTMLInputElement>document.getElementById('balance-input');
    let fieldElement = <HTMLInputElement>document.getElementById('amount-input');
      if (paymentType == 1) {
        balanaceLabel.hidden = true;
        balanceInput.hidden = true;
        fieldElement.disabled = true;
      } else if (paymentType == 2) {
        balanaceLabel.hidden = false;
        balanceInput.hidden = false;
        balanceInput.disabled = true;
        fieldElement.disabled = false;
      }
  }

  checkPaymentMode() {
    var radioCashElement = <HTMLInputElement>document.getElementById('cash');
    var radioChequeElement = <HTMLInputElement>document.getElementById('cheque');
    var radioCardElement = <HTMLInputElement>document.getElementById('card');
    var chequeLabel = <HTMLInputElement>document.getElementById('cheque-label');
    var chequeInput = <HTMLInputElement>document.getElementById('cheque-input');
    if (radioChequeElement.checked == false) {
      chequeLabel.hidden = true;
      chequeInput.hidden = true;
    } else {
      chequeLabel.hidden = false;
      chequeInput.hidden = false;
    }
  }

  onEditCheckPaymentMode(paymentMode) {
    let chequeLabel = <HTMLInputElement>document.getElementById('cheque-label');
    let chequeInput = <HTMLInputElement>document.getElementById('cheque-input');
    if (paymentMode == 1 || paymentMode == 3) {
      chequeLabel.hidden = true;
      chequeInput.hidden = true;
    } else {
      chequeLabel.hidden = false;
      chequeInput.hidden = false;
    }
  }

  checkSourceOfExpense() {
    var radioSelf = <HTMLInputElement>document.getElementById('self-radio');
    var personNameLabel = <HTMLInputElement>document.getElementById('personname-label');
    var personMobNoLabel = <HTMLInputElement>document.getElementById('personmobno-label');
    var personNameInput = <HTMLInputElement>document.getElementById('person-name');
    var personMobNoInput = <HTMLInputElement>document.getElementById('person-mobno');
    if (radioSelf.checked == true) {
      personNameLabel.hidden = true;
      personMobNoLabel.hidden = true;
      personNameInput.hidden = true;
      personMobNoInput.hidden = true;
    } else {
      personNameLabel.hidden = false;
      personMobNoLabel.hidden = false;
      personNameInput.hidden = false;
      personMobNoInput.hidden = false;
    }
  }

  onEditCheckSourceOfExpense(sourceOfExpense) {
    let personNameLabel = <HTMLInputElement>document.getElementById('personname-label');
    let personMobNoLabel = <HTMLInputElement>document.getElementById('personmobno-label');
    let personNameInput = <HTMLInputElement>document.getElementById('person-name');
    let personMobNoInput = <HTMLInputElement>document.getElementById('person-mobno');

    if (sourceOfExpense === 'Self ') {
      personNameLabel.hidden = true;
      personMobNoLabel.hidden = true;
      personNameInput.hidden = true;
      personMobNoInput.hidden = true;
    } else {
      personNameLabel.hidden = false;
      personMobNoLabel.hidden = false;
      personNameInput.hidden = false;
      personMobNoInput.hidden = false;
    }
  }

  onExpenseChange() {
    var selectExpense = <HTMLInputElement>document.getElementById('selectExpenseHead');
    var stdRate = <HTMLInputElement>document.getElementById('standardrate-input');
    console.log(selectExpense.value);
    this._expservice.getSubExpenseType(+selectExpense.value).subscribe(data => {
      this.subExp = data;
      console.log(this.subExp);
    });
  }

  onEditExpenseChange(expId) {
    this._expservice.getSubExpenseType(expId).subscribe(data => {
      this.subExp = data;
      console.log(this.subExp);
    });
  }

  onSubExpenseChange() {
    var subSelectExpense = <HTMLInputElement>document.getElementById('selectExpensesSubHead');
    console.log(subSelectExpense.value);
    var stdRate = <HTMLInputElement>document.getElementById('standardrate-input');
    var stdUnit = <HTMLInputElement>document.getElementById('unit-input');
    for(let i = 0;i < this.subExp.length; i++) {
        if (subSelectExpense.value == this.subExp[i].SEID) {
          stdRate.value = this.subExp[i].StandardRate;
          // stdRate.value;
          console.log(stdRate.value);
          stdUnit.value = this.subExp[i].MeasuringUnit;
          console.log(stdUnit.value);
        }
    }
  }

  saveDailyExp(expModel, isValid) {
    if (isValid) {
      console.log('Form Submitted', expModel);
    } else {
      console.error('No Data Found')
    }
  }

  calculateAmount() {
    let quantityData = <HTMLInputElement>document.getElementById('quantity');
    let rateData = <HTMLInputElement>document.getElementById('rate-input');
    let totalData = <HTMLInputElement>document.getElementById('total-input');
    if (quantityData.value != null && rateData != null) {
      let ans = parseFloat(quantityData.value) * parseFloat(rateData.value);
      totalData.value = ans.toString();
    }
  }

  calculateBalance() {
    let totalData = <HTMLInputElement>document.getElementById('total-input');
    let amountData = <HTMLInputElement>document.getElementById('amount-input');
    let balData = <HTMLInputElement>document.getElementById('balance-input');
    let ans = parseFloat(totalData.value) - parseFloat(amountData.value);
    if (ans < 0) {
      swal('Oops!!!', 'Amount exceeds the Total', 'error');
    } else {
      balData.value = ans.toString();
    }
  }

  hideElementsOnInit() {
    let balanaceLabel = <HTMLInputElement>document.getElementById('balance-label');
    let balanceInput = <HTMLInputElement>document.getElementById('balance-input');
    let personNameLabel = <HTMLInputElement>document.getElementById('personname-label');
    let personMobNoLabel = <HTMLInputElement>document.getElementById('personmobno-label');
    let personNameInput = <HTMLInputElement>document.getElementById('person-name');
    let personMobNoInput = <HTMLInputElement>document.getElementById('person-mobno');
    let chequeLabel = <HTMLInputElement>document.getElementById('cheque-label');
    let chequeInput = <HTMLInputElement>document.getElementById('cheque-input');
    let amountLabel = <HTMLInputElement>document.getElementById('amount-label');
    let amountInput = <HTMLInputElement>document.getElementById('amount-input');
  }
}

