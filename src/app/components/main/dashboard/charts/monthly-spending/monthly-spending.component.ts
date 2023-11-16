import { Component } from '@angular/core';
import {ChartData, ChartOptions, ChartType} from "chart.js";

@Component({
  selector: 'app-monthly-spending',
  templateUrl: './monthly-spending.component.html',
  styleUrls: ['./monthly-spending.component.scss']
})
export class MonthlySpendingComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<any> = {
    labels: [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL' ],
    datasets: [
      { label: 'Sales Per Month' ,
        data: [ 6500, 5900, 8000, 8100, 5600, 5500, 4000 ],
        backgroundColor: ["#4F46E5"],
      }
    ]
  };
}
