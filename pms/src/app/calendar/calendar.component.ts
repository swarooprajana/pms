import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  calendar: (number | null)[][] = [];
  selectedDate: Date = new Date();
  currentMonth: any;
  selectedColor: string = ''; // Initialize selectedColor variable
  dialogRef!: MatDialogRef<any>;
  @ViewChild('calendereventadd', { static: true }) calendereventadd!: TemplateRef<any>;
  calendarEventForm!: FormGroup;
  currentYear: any;
  monthNames: string[] = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  dayNames: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  showFullYearCalendar: boolean = false;
  yearRange: any;
  showPopup: boolean = false;
  isLoading: boolean = false;
  events: any[] = [];
  calendarData: any;
  enterprisenameid: any;
  colorOptions: any[] = [
    { value: 'rgba(5, 0, 95, 1)' },
    { value: 'rgba(255, 84, 93, 1)' },
    { value: 'rgba(80, 191, 165, 1)' },
    { value: 'yellow' }
    // Add more color options as needed
  ];
  
  SUNDAY_COLOR = ''; // Define a specific color for Sundays

  constructor(
    
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.calendarEventForm = this.fb.group({
      Title: [''],
      Description: [''],
      Colour: [''],
      Start_Date: [''],
      End_Date: ['']
    });

    const storedLoginDetails = sessionStorage.getItem('enterprisedetails');
    if (storedLoginDetails) {
      const loginData = JSON.parse(storedLoginDetails);
      this.enterprisenameid = loginData.storedEnterpriseName;
    }

    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
    this.generateCalendar(this.currentMonth, this.currentYear);
    this.updateYearRange();
    this.calendarDataGet();
  }

  onSubmit(): void {
    if (this.calendarEventForm.valid) {
      const formData = this.calendarEventForm.value;
  
      const eventData = {
        Enterprise_Name: this.enterprisenameid,
        Title: formData.Title,
        Colour: formData.Colour,
        Start_Date: this.formatDate(formData.Start_Date),
        End_Date: this.formatDate(formData.End_Date),
        Description: formData.Description
      };
  
      console.log('Form Data:', formData);
      console.log('Event Data:', eventData);
  
      // this.calendarService.addEvent(eventData).subscribe(
      //   (data: any) => {
      //     if (data['Status'] === 200) {
      //       console.log('Event added successfully:', data);
      //       this.selectedDate = formData.Start_Date;
      //       this.dialogRef.close();
            
      //       // Update events array with newly added event
      //       const newEvent = {
      //         title: formData.Title,
      //         startDate: formData.Start_Date,
      //         endDate: formData.End_Date,
      //         color: formData.Colour,
      //         description: formData.Description,
      //         formattedStartDate: this.formatDate(formData.Start_Date),
      //         formattedEndDate: this.formatDate(formData.End_Date)
      //       };
      //       this.events.push(newEvent);
      
      //       // Regenerate the calendar with updated events
      //       this.generateCalendar(this.currentMonth, this.currentYear);
      //     } else {
      //       alert('Failed to add event.');
      //     }
      //     this.showPopup = false;
      //   },
      //   error => {
      //     console.error('Error adding event:', error);
      //     alert('An error occurred while adding the event.');
      //     this.showPopup = false;
      //   }
      // );
    } else {
      console.error('Form is invalid. Please fill all required fields.');
    }
  }
  

  applyForMonth(monthIndex: number): void {
    // Example: Log message when applying actions for the specific month
    console.log(`Applying actions for month ${this.monthNames[monthIndex]} ${this.currentYear}`);
    // Implement your logic here, e.g., save data, trigger events, etc.
  }

  openPopup() {
    this.dialogRef = this.dialog.open(this.calendereventadd, {
      width: '60%',
      height: 'auto'
    });
  }

  setColor(color: string): void {
    this.selectedColor = color; // Update selectedColor
    this.calendarEventForm.patchValue({ Colour: color }); // Update Colour control value in the form
  }

  calendarDataGet(): void {
    this.isLoading = true;

    const filtdata = {
      EnterpriseName: this.enterprisenameid
    };

    // // this.apollo.use('schoolAdminClient').watchQuery({
    // //   query: CALENDAR_DATA_QUERY,
    // //   variables: filtdata,
    // //   fetchPolicy: 'network-only'
    // // }).valueChanges.subscribe(
    // //   ({ data }: any) => {
    // //     const calendarDetails = data.CalendarData.map((event: any) => ({
    // //       ...event,
    // //       formattedStartDate: this.formatDate(event.Start_Date),
    // //       formattedEndDate: this.formatDate(event.End_Date)
    // //     }));

    // //     this.calendarData = calendarDetails;
    // //     this.events = calendarDetails.map((event: any) => ({
    // //       title: event.Title,
    // //       startDate: event.Start_Date,
    // //       endDate: event.End_Date,
    // //       color: event.Colour,
    // //       description: event.Description,
    // //       formattedStartDate: event.formattedStartDate,
    // //       formattedEndDate: event.formattedEndDate
    // //     }));

    // //     this.isLoading = false;
    // //   },
    // //   error => {
    // //     console.error('Error fetching calendar data', error);
    // //     this.isLoading = false;
    // //   }
    // );
  }

  formatDate(date: Date): string {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }

  isDateInRange(day: number, month: number): boolean {
    if (!this.selectedDate) return false;
  
    const date = new Date(this.currentYear, month, day);
    return date >= new Date(this.selectedDate) && date <= new Date(this.calendarEventForm.value.End_Date);
  }

  getEventColor(day: number | null, month: number): string | null {
    if (day === null) return null;
  
    const date = new Date(this.currentYear, month, day);
  
    // Check if the date is a Sunday
    if (date.getDay() === 0) {
      return this.SUNDAY_COLOR;
    }
  
    // Reset time part of the date for accurate comparison
    date.setHours(0, 0, 0, 0);
  
    const event = this.events.find(event => {
      const startDate = new Date(event.startDate);
      const endDate = new Date(event.endDate);
  
      // Reset time part of the start and end dates for accurate comparison
      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(0, 0, 0, 0);
  
      // console.log(`Checking date: ${date}, Start Date: ${startDate}, End Date: ${endDate}, Event: ${event.title}`);
      return date >= startDate && date <= endDate;
    });
  
    // console.log(`Day: ${day}, Month: ${month}, Color: ${event ? event.color : 'No Event'}`);
    return event ? event.color : null;
  }
  

  getEventsForMonth(monthIndex: number, year: number): any[] {
    return this.events.filter(event => {
      const eventStartDate = new Date(event.startDate);
      const eventEndDate = new Date(event.endDate);
      
      // Check if the event starts or ends within the given month and year
      return (
        (eventStartDate.getMonth() === monthIndex && eventStartDate.getFullYear() === year) ||
        (eventEndDate.getMonth() === monthIndex && eventEndDate.getFullYear() === year)
      );
    });
  }
  

  selectDate(day: number | null) {
    if (day) {
      this.selectedDate = new Date(this.currentYear, this.currentMonth, day);
    }
  }

  generateCalendar(month: number, year: number) {
    const start = new Date(year, month, 1);
    const firstDay = start.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
  
    let date = 1;
    this.calendar = [];
    for (let i = 0; i < 6; i++) {
      const week: (number | null)[] = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay || date > daysInMonth) {
          week.push(null);
        } else {
          week.push(date++);
        }
      }
      this.calendar.push(week);
    }
  }
  
  generateCalendarForMonth(month: number): (number | null)[][] {
    const start = new Date(this.currentYear, month, 1);
    const firstDay = start.getDay();
    const daysInMonth = new Date(this.currentYear, month + 1, 0).getDate();
  
    let date = 1;
    const calendar: (number | null)[][] = [];
    for (let i = 0; i < 6; i++) {
      const week: (number | null)[] = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay || date > daysInMonth) {
          week.push(null);
        } else {
          week.push(date++);
        }
      }
      calendar.push(week);
    }
    return calendar;
  }
  
  generateCalendarForYear(year: number): (number | null)[][][] {
    const calendars: (number | null)[][][] = [];
    for (let month = 0; month < 12; month++) {
      calendars.push(this.generateCalendarForMonth(month));
    }
    return calendars;
  }
  
  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar(this.currentMonth, this.currentYear);
    this.updateYearRange();
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar(this.currentMonth, this.currentYear);
    this.updateYearRange();
  }

  toggleFullYearCalendar() {
    this.showFullYearCalendar = !this.showFullYearCalendar;
    this.updateYearRange();
  }

  toggleMonthCalendar() {
    this.showFullYearCalendar = false;
    this.generateCalendar(this.currentMonth, this.currentYear);
    this.updateYearRange();
  }

  updateYearRange() {
    this.yearRange = `${this.currentYear}-${this.currentYear + 1}`;
  }

  prevYear() {
    this.currentYear--;
    this.generateCalendarForYear(this.currentYear);
    this.updateYearRange();
  }

  nextYear() {
    this.currentYear++;
    this.generateCalendarForYear(this.currentYear);
    this.updateYearRange();
  }

  isToday(day: number | null, month: number): boolean {
    const today = new Date();
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      this.currentYear === today.getFullYear()
    );
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    this.dialogRef.close();
  }

  isSunday(day: number, month: number): boolean {
    if (day === null) return false;
    const date = new Date(this.currentYear, month, day);
    return date.getDay() === 0; // 0 is Sunday
  }

}
