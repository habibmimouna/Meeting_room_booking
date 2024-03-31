import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ReservationService } from '../../models/services/reservation.service';
import { Reservation } from '../../models/reservation';
import { MeetingRoomService } from '../../models/services/meeting-room.service';
import { MeetingRoom } from '../../models/meetingRoom';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../models/services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-custom-calendar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './custom-calendar.component.html',
  styleUrl: './custom-calendar.component.scss',
})
export class CustomCalendarComponent {
  currentDate: Date = new Date();
  selectedYear: number = 0;
  selectedMonth: number = 0;
  daysInMonth: Date[] = [];
  hoursOfDay: string[] = [];
  selectedHours: string[] = [];
  hasCheckedHours: boolean = false;
  selectedDay: string = '';
  meetingRoomId: string = '';
  reservation: Reservation = {
    id: 0,
    day: this.selectedDay,
    reservedHours: this.selectedHours,
    purpose: '',
    meetingRoom: this.meetingRoomId,
    user: this.getUserIdFromToken(),
  };

  constructor(
    private reservationService: ReservationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.selectedYear = this.currentDate.getFullYear();
    this.selectedMonth = this.currentDate.getMonth() + 1;
    this.generateDaysInMonth();
    this.generateHoursOfDay();
  }

  generateDaysInMonth(): void {
    this.daysInMonth = [];
    const numDays = new Date(
      this.selectedYear,
      this.selectedMonth,
      0
    ).getDate();
    for (let i = 1; i <= numDays; i++) {
      this.daysInMonth.push(
        new Date(this.selectedYear, this.selectedMonth - 1, i)
      );
    }
  }

  changeMonth(delta: number): void {
    const newDate = new Date(this.selectedYear, this.selectedMonth - 1 + delta);
    this.selectedYear = newDate.getFullYear();
    this.selectedMonth = newDate.getMonth() + 1;
    this.generateDaysInMonth();
  }
  selectDay(day: Date): void {
    const month = (day.getMonth() + 1).toString().padStart(2, '0');
    const dayOfMonth = day.getDate().toString().padStart(2, '0');
    const year = day.getFullYear();
    const formattedDate = `${month}-${dayOfMonth}-${year}`;
    this.selectedDay = formattedDate;
  }

  generateHoursOfDay(): void {
    this.hoursOfDay = [];
    for (let i = 8; i < 17; i++) {
      this.hoursOfDay.push(`${i}-${i + 1}`);
    }
  }
  toggleHour(hour: string): void {
    const index = this.selectedHours.indexOf(hour);
    if (index === -1) {
      this.selectedHours.push(hour);
    } else {
      this.selectedHours.splice(index, 1);
    }
    this.updateCheckedStatus();
  }
  updateCheckedStatus(): void {
    this.hasCheckedHours = this.selectedHours.length > 0;
  }
  isSelectedHour(hour: string): boolean {
    return this.selectedHours.includes(hour);
  }
  reserveHours(): void {
    this.selectedHours = [];
    this.reservation.day = this.selectedDay;
    this.route.params.subscribe((params) => {
      this.meetingRoomId = params['id'];
      this.reservation.meetingRoom = params['id'];
    });
    this.updateCheckedStatus();
    console.log(this.reservation);
    this.makeReservation();
  }

  makeReservation(): void {
    this.reservationService.createReservation(this.reservation).subscribe(
      () => {
        console.log('Reservation created successfully.');
      },
      (error) => {
        console.error('Error creating reservation:', error);
      }
    );
  }
  getUserIdFromToken(): string | null {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      try {
        const userObject = JSON.parse(currentUser);
        if (userObject && userObject._id) {
          return userObject._id;
        } else {
          console.error('User object does not contain _id field.');
          return null;
        }
      } catch (error) {
        console.error('Error parsing currentUser JSON:', error);
        return null;
      }
    } else {
      console.error('No currentUser found in localStorage.');
      return null;
    }
  }
  
}
