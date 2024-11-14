import { Component } from '@angular/core';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrl: './all-jobs.component.scss'
})
export class AllJobsComponent {
  cardItems = [
    {
      title: 'LT81397287283',
      status: 'Underground',
      statusColor: 'green',
      customer: 'Gilbert Bashirian',
      supervisor: 'Pablo Schuppe',
      fromDate: '13/05/2017',
      toDate: '15/11/2017',
      percent: 75,
      size: 50,
      strokewidth: 5,
      progressColor: 'blue',
      remainingColor: '#ddd'
    },
    {
      title: 'MT12457289202',
      status: 'Active',
      statusColor: 'blue',
      customer: 'Alice Johnson',
      supervisor: 'John Doe',
      fromDate: '01/01/2022',
      toDate: '15/12/2022',
      percent: 50,
      size: 50,
      strokewidth: 5,
      progressColor: 'green',
      remainingColor: '#eee'
    },
    {
      title: 'HT09283837483',
      status: 'Completed',
      statusColor: 'purple',
      customer: 'Mark Brown',
      supervisor: 'Sara Connor',
      fromDate: '10/03/2021',
      toDate: '20/09/2021',
      percent: 100,
      size: 50,
      strokewidth: 5,
      progressColor: 'purple',
      remainingColor: '#ccc'
    }
  ];
}
