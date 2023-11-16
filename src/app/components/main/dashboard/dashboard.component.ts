import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  monthly_stats = [
    { name: 'Total Money Received', stat: '71,897', previousStat: '70,946', change: '12%', changeType: 'increase' },
    { name: 'Total Money Sent', stat: '58,616', previousStat: '60,616%', change: '2.02%', changeType: 'decrease' },
    { name: 'Money In Vs Money Out', stat: '24.57%', previousStat: '28.62%', change: '4.05%', changeType: 'decrease' },
  ]

}
