// import { EventInput } from '@fullcalendar/core';

// let eventGuid = 0;
// const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

// export const INITIAL_EVENTS: EventInput[] = [
//   {
//     id: createEventId(),
//     title: 'All-day event',
//     start: TODAY_STR
//   },
//   {
//     id: createEventId(),
//     title: 'Timed event',
//     start: TODAY_STR + 'T00:00:00',
//     end: TODAY_STR + 'T03:00:00'
//   },
//   {
//     id: createEventId(),
//     title: 'Timed event',
//     start: TODAY_STR + 'T12:00:00',
//     end: TODAY_STR + 'T15:00:00'
//   }
// ];

// export function createEventId() {
//   return String(eventGuid++);
// }



// calendarVisible = signal(true);
//   calendarOptions = signal<CalendarOptions>({
//     plugins: [
//       interactionPlugin,
//       dayGridPlugin,
//       timeGridPlugin,
//       listPlugin,
//       multiMonthPlugin
//     ],
//     headerToolbar: {
//       left: '',
//       center: 'title',
//       right: ''
//     },
//     initialView: 'multiMonthMonth',
//     views: {
//       multiMonthMonth: {
//         type: 'multiMonth',
//         duration: { months: 12 } //Change the number of months to visible in the calendar
//       }
//     },
//     initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
//     weekends: true,
//     editable: true,
//     selectable: true,
//     selectMirror: true,
//     dayMaxEvents: true,
//     select: this.handleDateSelect.bind(this),
//     eventClick: this.handleEventClick.bind(this),
//     eventsSet: this.handleEvents.bind(this)
//     /* you can update a remote database when these fire:
//     eventAdd:
//     eventChange:
//     eventRemove:
//     */
//   });
  // currentEvents = signal<EventApi[]>([]);

  // constructor(private changeDetector: ChangeDetectorRef) {
  // }

  // handleCalendarToggle() {
  //   this.calendarVisible.update((bool) => !bool);
  // }

  // handleWeekendsToggle() {
  //   this.calendarOptions.update((options) => ({
  //     ...options,
  //     weekends: !options.weekends,
  //   }));
  // }

  // handleDateSelect(selectInfo: DateSelectArg) {
  //   const title = prompt('Please enter a new title for your event');
  //   const calendarApi = selectInfo.view.calendar;

  //   calendarApi.unselect(); // clear date selection

  //   if (title) {
  //     calendarApi.addEvent({
  //       id: createEventId(),
  //       title,
  //       start: selectInfo.startStr,
  //       end: selectInfo.endStr,
  //       allDay: selectInfo.allDay
  //     });
  //   }
  // }

  // handleEventClick(clickInfo: EventClickArg) {
  //   if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
  //     clickInfo.event.remove();
  //   }
  // }

  // handleEvents(events: EventApi[]) {
  //   this.currentEvents.set(events);
  //   this.changeDetector.detectChanges(); // workaround for pressionChangedAfterItHasBeenCheckedError
  // }