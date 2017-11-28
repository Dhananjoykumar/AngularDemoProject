import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'app/admin-view/shared/expense.service';
import { ExpenseData } from 'app/admin-view/models/expenseData';

@Component({
  selector: 'app-personal-expense',
  templateUrl: './personal-expense.component.html',
  styleUrls: ['./personal-expense.component.scss']
})
export class PersonalExpenseComponent implements OnInit {

  // fundDetail: DailyExpensesTemp;
  // fundDetails: DailyExpensesTemp[] = new Array<DailyExpensesTemp>();
  expenseDetails: ExpenseData[];

  constructor(private _expService: ExpenseService) {
    this.expenseDetails = [
      // {
      //   Id: 1,
      //   Date: '2017-11-12',
      //   ExpensesType: 'abc',
      //   SubExpenseType: 'def',
      //   Qty_Size_Area: '10',
      //   StandardRate: '10',
      //   PaymentType: 'cash',
      //   InvoiceNo: 'C54673',
      //   SourceOfExpense: 'Self',
      //   TotalExpense: 100
      // },
      // {
      //   Id: 1,
      //   Date: '2017-11-09',
      //   ExpensesType: 'abc',
      //   SubExpenseType: 'def',
      //   Qty_Size_Area: '10',
      //   StandardRate: '10',
      //   PaymentType: 'cash',
      //   InvoiceNo: 'C54673',
      //   SourceOfExpense: 'Self',
      //   TotalExpense: 100
      // },
      // {
      //   Id: 1,
      //   Date: '2017-11-29',
      //   ExpensesType: 'abc',
      //   SubExpenseType: 'def',
      //   Qty_Size_Area: '10',
      //   StandardRate: '10',
      //   PaymentType: 'cash',
      //   InvoiceNo: 'C54673',
      //   SourceOfExpense: 'Self',
      //   TotalExpense: 100
      // },
      // {
      //   Id: 1,
      //   Date: '2017-11-10',
      //   ExpensesType: 'abc',
      //   SubExpenseType: 'def',
      //   Qty_Size_Area: '10',
      //   StandardRate: '10',
      //   PaymentType: 'cash',
      //   InvoiceNo: 'C54673',
      //   SourceOfExpense: 'Self',
      //   TotalExpense: 100
      // }
    ];
  }

  ngOnInit() {
  }

  searchExpense() {
    // this.fundDetails = [];
    let dateData = <HTMLInputElement>document.getElementById('expense-date');
    // for (let i = 0;i < this.fund.length; i++) {
    //   if (dateData.value == this.fund[i].Date) {
    //     this.fundDetails.push(this.fund[i]);
    //     console.log(this.fundDetails);
    //   } else {
    //     continue;
    //   }
    // }
    this._expService.searchExpenseByDate(dateData.value).subscribe(data => {
      this.expenseDetails = data;
      console.log(data);
    });
  }
}

// interface DailyExpensesTemp {
//   Id: number;
//   Date: string;
//   ExpensesType: string;
//   SubExpenseType: string;
//   Qty_Size_Area: string;
//   StandardRate: string;
//   PaymentType: string;
//   InvoiceNo: string;
//   SourceOfExpense: string;
//   TotalExpense: number;
// }
