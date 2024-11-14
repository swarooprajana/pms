import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrl: './status-card.component.scss'
})
export class StatusCardComponent {
  @Input() title: string = '';
  @Input() status: string = 'In Progress';
  @Input() statusColor: string = 'green';
  @Input() customer: string = '';
  @Input() supervisor: string = '';
  @Input() fromDate: string = '';
  @Input() toDate: string = '';
  @Input() progress: number = 0; 
  @Input() percent: number = 0; 
  @Input() size: number = 0; 
  @Input() strokewidth: number = 0; 
  @Input() progressColor: string=''; 
  @Input() remainingColor: string=''; 
   // Accepts a value between 0-100
}
