import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarComponentComponent } from './components/sidebar-component/sidebar-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { AddJobComponent } from './jobs/add-job/add-job.component';
import { ButtonComponent } from './components/button/button.component';
import { StatusCardComponent } from './components/status-card/status-card.component';
import { CircluarProgressionComponent } from './components/circluar-progression/circluar-progression.component';
import { HeaderComponent } from './components/header/header.component';
import { EditButtonComponent } from './uicomponents/edit-button/edit-button.component';
import { OtpComponent } from './authentication/otp/otp.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PwdResetComponent } from './authentication/pwd-reset/pwd-reset.component';
import { NewPwdComponent } from './authentication/new-pwd/new-pwd.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    SidebarComponentComponent,
    DashboardComponent,
    AllJobsComponent,
    PieChartComponent,
    InputsComponent,
    AddJobComponent,
    ButtonComponent,
    StatusCardComponent,
    CircluarProgressionComponent,
    HeaderComponent,
    EditButtonComponent,
    OtpComponent,
    PwdResetComponent,
    NewPwdComponent,
    DashboardHomeComponent,
    CalendarComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    LayoutModule,
    FormsModule,
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
