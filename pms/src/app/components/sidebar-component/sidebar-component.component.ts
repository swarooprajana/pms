import { Component, computed, Input, signal } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router, RouterLink,RouterLinkActive } from '@angular/router';

export type MenuItem = {
  icon:string,
  label: string,
  route: string
}

@Component({
  selector: 'app-sidebar-component',
 
  templateUrl: './sidebar-component.component.html',
  styleUrl: './sidebar-component.component.css'
})
export class SidebarComponentComponent {

   menuItems = signal<MenuItem[]>([
    {
      icon: 'home',
      label: 'Home',
      route: '/home'
    },
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: '/dashboard'
    },
    {
      icon: 'history',
      label: 'History',
      route: '/history'
    },
    {
      icon: 'memory',
      label: 'Sensor',
      route: '/sensor'
    },
    {
      icon: 'domain',
      label: 'Facilities',
      route: '/facilities'
    },
    {
      icon: 'local_taxi',
      label: 'Trips',
      route: '/trips'
    },
    {
      icon: 'notifications_active',
      label: 'Alerts',
      route: '/alerts'
    },
    {
      icon: 'person_add',
      label: 'User Management',
      route: '/user-management'
    },
    {
      icon: 'tune',
      label: 'Device Management',
      route: '/device-management'
    },
    {
      icon: 'local_activity',
      label: 'Ticket Management',
      route: '/ticket-management'
    },
    {
      icon: 'local_gas_station',
      label: 'Fuel Prices',
      route: '/fuel-prices'
    },
    {
      icon: 'developer_mode',
      label: 'Commands',
      route: '/commands'
    },
    {
      icon: 'library_books',
      label: 'Documents',
      route: '/documents'
    },
    {
      icon: 'routes',
      label: 'Routes',
      route: '/routes'
    }
   ])

   sideNavCollapsed = signal(false);
   activeRoute = signal('');
   constructor(private router: Router) {
    // Listen to router events to update the active route signal
    this.router.events.subscribe(() => {
      this.activeRoute.set(this.router.url);
    });
  }

   @Input() set collapsed(val: boolean){
    this.sideNavCollapsed.set(val);
   }

   profileSize = computed (()=> this.sideNavCollapsed() ? '32' : '100')
}
