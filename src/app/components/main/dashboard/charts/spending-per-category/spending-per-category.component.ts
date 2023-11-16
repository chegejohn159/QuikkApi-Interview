import { Component } from '@angular/core';
import {ChartData, ChartOptions, ChartType} from "chart.js";

@Component({
  selector: 'app-spending-per-category',
  templateUrl: './spending-per-category.component.html',
  styleUrls: ['./spending-per-category.component.scss']
})
export class SpendingPerCategoryComponent {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  public pieChartType: ChartType = "pie";

  public pieChartData: ChartData<any> = {
    labels: [ 'Food', 'Clothing', 'Rent', 'Entertainment', 'Savings', 'Transactions', 'Misc' ],
    datasets: [
      { label: 'Expenditure' ,
        data: [ 6500, 5900, 8000, 8100, 5600, 5500, 4000 ],
        backgroundColor: ["purple","red", "cyan", "teal", "green", "yellow", "orange"],
      }
    ]
  };

}
