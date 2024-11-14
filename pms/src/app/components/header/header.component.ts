import { Component } from '@angular/core';
import { PmsService } from '../../pms.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private service:PmsService){

  }
  isLoggedIn(): boolean {
    return this.service.isLoggedIn();
  }

  logout() {
    console.log('Logout clicked');
    // this.routes.navigate(['/login']);
    // this.superAdmin.setLoggedIn(false);
  }

  navigateToProfile() {
    // Implement navigation logic to the profile page
  }

  navigateToSettings() {
    // Implement navigation logic to the settings page
  }

  openHelp() {
    // Implement logic to open help
  }
}
