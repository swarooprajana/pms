import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, VERSION, AfterViewInit, signal, Input, computed, HostListener, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { animate, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  
})
export class SidebarComponent  {
  isOpen = false;
  isMobile = false;

  menuItems = [
    {label:"Profile",icon:"Person",link:"/Profile"},
    {label: 'DashBoard', icon: 'dashboard', link:"/dashboard"},
    { label: 'All Jobs', icon: 'work', link: 'alljobs' },
    { label: 'Calender', icon: 'calendar_today', link: "calender" },
    { label: 'Add', icon: 'add_circle_outline', link: 'addjobs' },
    { label: 'Settings', icon: 'history', link: '/settings' },
    { label: 'Settings', icon: 'people', link: '/settings' }

  ];
constructor() {
    this.checkMobile();
  }
  toggleSidebar() {
    this.isOpen = !this.isOpen;
    if (!this.isMobile) {
      this.isOpen = !this.isOpen;
    }
  }

  openSidebar() {
    this.isOpen = true;
  }

  closeSidebar() {
    this.isOpen = false;
  }
 

  @HostListener('window:resize')
  checkMobile() {
    this.isMobile = window.innerWidth <= 768;
    if (this.isMobile) {
      this.isOpen = false; // Ensure sidebar does not expand on mobile
    }
  }
}
