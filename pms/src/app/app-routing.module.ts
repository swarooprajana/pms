import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { AddJobComponent } from './jobs/add-job/add-job.component';
import { OtpComponent } from './authentication/otp/otp.component';
import { PwdResetComponent } from './authentication/pwd-reset/pwd-reset.component';
import { NewPwdComponent } from './authentication/new-pwd/new-pwd.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirect to login if path is empty
  { path: 'login', component: LoginComponent }, 
  { path: 'otp', component: OtpComponent }, 
  { path: 'resetpassword', component: PwdResetComponent },
  { path: 'confirmpassword', component: NewPwdComponent },          // Define the login route
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardHomeComponent }, // Default child route
      { path: 'alljobs', component: AllJobsComponent },
      { path: 'addjobs', component: AddJobComponent },
      {path:"calender",component:CalendarComponent}
      // Add more child routes as needed
    ]
  },
  { path: '**', redirectTo: '/login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
