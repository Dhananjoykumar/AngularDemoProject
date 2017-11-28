import { Component, OnInit, transition } from '@angular/core';
import { DailyExpense } from 'app/admin-view/models/dailyExpense';
import { Router } from '@angular/router';
import { CandidateDailyExpenseComponent } from 'app/admin-view/internal-pages/candidate-daily-expense/candidate-daily-expense.component';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import { FormGroup, FormControl } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms/src/form_builder';
import { Validators } from '@angular/forms/src/validators';
import { ExpenseService } from 'app/admin-view/shared/expense.service';
import { ExpenseData } from 'app/admin-view/models/expenseData';
import { SIDEBAR_TOGGLE_DIRECTIVES } from 'app/admin-view/commons/sidebar.directive';

@Component({
  selector: 'app-daily-expense-table',
  templateUrl: './daily-expense-table.component.html',
  styleUrls: ['./daily-expense-table.component.scss']
})
export class DailyExpenseTableComponent implements OnInit {

  flag: boolean;
  data = new ExpenseData;
  expenses: ExpenseData[];
  public loading = false;


  constructor(private router: Router,
              public _dailyExp: CandidateDailyExpenseComponent,
              private _expenseService: ExpenseService) {
    this.loading = true;
    this._expenseService.getExpenseData().subscribe(data => {
      this.expenses = data;
      this.loading = false;
    });
  }

  ngOnInit() {
    this.flag = false;
  }

  addNewExpense() {
    this.router.navigateByUrl('/internalpages/candidatedailyexpense');
  }

  approveExpense(id) {
    for (let i = 0;i < this.expenses.length; i++) {
      if (this.expenses[i].Id == id) {
        if (this.expenses[i].IsActive == 0) {
          this.expenses[i].IsActive = 1;
        } else {
          this.expenses[i].IsActive = 0;
        }
      } else {
        continue;
      }
    }
  }

  publishExpense(id) {
    for (let i = 0;i < this.expenses.length; i++) {
      if (this.expenses[i].Id == id) {
        if (this.expenses[i].IsApproved == 0) {
          this.expenses[i].IsApproved = 1;
        } else {
          this.expenses[i].IsApproved = 0;
        }
      } else {
        continue;
      }
    }
  }

  hoverData(data: string) {
    var fieldData = <HTMLInputElement>document.getElementById('expType');

    if (data != null) {
      // var temp: string = data;
      fieldData.title = data;
    }
  }

  editExpenseData(myModal, id: number) {
    this.flag = true;
    var result = this.expenses.filter(function( expense ) {
      return expense.Id === id;
    });
    this._expenseService.storageEl = result[0];
    console.log(result);
    this.router.navigate(['/internalpages/candidatedailyexpense']);
  }

  showData() {}

  // showData(myModal, id: number) {
  //   myModal.show();
  //   let footerDiv = <HTMLInputElement>document.getElementById('modalfooter');
  //   for (let i = 0;i < this.expenses.length; i++) {
  //     if (id == this.expenses[i].Id) {
  //       this.data = this.expenses[i];
  //       if (this.expenses[i].IsPrinted == 1) {
  //         footerDiv.hidden = true;
  //         this.editExpense.patchValue({Id: this.data.Id});
  //         this.editExpense.patchValue({Date: this.data.Date});
  //         this.editExpense.patchValue({ExpenseType: this.data.ExpenseType});
  //         this.editExpense.patchValue({SubExpenseType: this.data.SubExpenseType});
  //         this.editExpense.patchValue({Qty_Size_Area: this.data.Qty_Size_Area});
  //         this.editExpense.patchValue({Rate: this.data.Rate});
  //         this.editExpense.patchValue({TotalExpense: this.data.TotalExpense});
  //         this.editExpense.patchValue({PaymentMode: this.data.PaymentMode});
  //         this.editExpense.patchValue({PaidAmount: this.data.PaidAmount});
  //         this.editExpense.patchValue({InvoiceNo: this.data.InvoiceNo});
  //         this.editExpense.patchValue({FirmName: this.data.FirmName});
  //         this.editExpense.patchValue({SourceOfExpense: this.data.SourceOfExpense});
  //         this.editExpense.patchValue({CandidateRole: this.data.CandidateRole});
  //         this.editExpense.patchValue({IsApproved: this.data.IsApproved});
  //         this.editExpense.patchValue({IsPrinted: this.data.IsPrinted});
  //         this.editExpense.patchValue({Status: this.data.Status});
  //       }
  //     } else {
  //       continue;
  //     }
  //   }
  // }

  searchExpense() {
    let expIdData = <HTMLInputElement>document.getElementById('expenseid');
    let fromDateData = <HTMLInputElement>document.getElementById('fromdate');
    let tillDateData = <HTMLInputElement>document.getElementById('tilldate');

    if (expIdData.value == '' && fromDateData.value == '' && tillDateData.value == '') {
      swal('Woah!!!', 'Please do fill all fields to search...', 'warning');
    } else if ((fromDateData.value === '' && tillDateData.value !== '') || (fromDateData.value !== '' && tillDateData.value === '')) {
      /**&& expIdData.value != '' || (fromDateData.value == '' && tillDateData.value == '') */
      swal('Woah!!!', 'Please do fill all date fields to search...', 'warning');
    } else {
      this._expenseService.searchExpenseData(+expIdData.value, fromDateData.value, tillDateData.value);
    }
  }

  selectAll(event) {
    let checkData = <HTMLInputElement>document.getElementById('selectActive');
    if (event.target.checked) {
      // for (let i = 0; i < this.expenses.length; i++) {
        checkData.checked = true;
        this._expenseService.storageEl = this.expenses.filter(function(expense){
          return expense.IsPrinted === 0;
        });
        console.log(this._expenseService.storageEl);
      // }
    }
  }

  checkData(id) {
    this._expenseService.storageEl.splice
  }
}
