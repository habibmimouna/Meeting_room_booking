import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { UserService } from '../../models/services/user.service';
import { User } from '../../models/user';
import { ReservationService } from '../../models/services/reservation.service';
import { Reservation } from '../../models/reservation';
import { NgFor } from '@angular/common';
import { MeetingRoomService } from '../../models/services/meeting-room.service';
import { CustomCalendarComponent } from '../../component/custom-calendar/custom-calendar.component';
import { ModifyCalendarComponent } from '../../component/modify-calendar/modify-calendar.component';
import { MeetingRoom } from '../../models/meetingRoom';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [NavbarComponent, NgFor,CustomCalendarComponent,ModifyCalendarComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  selectedReservation: Reservation ={
    id: 0,
    day: "",
    reservedHours: [],
    purpose: '',
    meetingRoom: "",
    user: "",
  };
  userReservations: Reservation[] = [];
  user: User = {
    _id: '',
    fullName: '',
    email: '',
    password: '',
    phone: '',
    username: '',
    isAdmin: false,
  };

  constructor(
    private userService: UserService,
    private reservationService: ReservationService,
    private meetingRoomService: MeetingRoomService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.getUserFromLocalStorage();
    this.getUserReservations(this.user._id);
  }

  getUserFromLocalStorage(): void {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      try {
        const userObject: User = JSON.parse(currentUser);
        this.user = userObject;
        this.user._id = userObject._id;
      } catch (error) {
        console.error('Error parsing currentUser JSON:', error);
      }
    } else {
      console.error('No currentUser found in localStorage.');
    }
  }

  async getUserReservations(userId: string): Promise<void> {
    try {
      this.reservationService
        .getReservationList()
        .subscribe((reservations: Reservation[]) => {
          this.userReservations = reservations.filter((reservation) => {
            return reservation.user === userId || reservation.user === null;
          });
          console.log('test', this.userReservations);
        });
    } catch (err) {
      console.error('Error:', err);
    }
  }

  deleteReservation(reservation: Reservation): void {
    try {
      this.reservationService.deleteReservation(reservation).subscribe(
        () => {
          console.log('Reservation deleted successfully.');
          window.location.reload();
        },
        (error) => {
          console.error('Error deleting reservation:', error);
        }
      );
    } catch (err) {
      console.log('error :', err);
    }
  }


  updateReservation(reservation: Reservation): void {
    try {
      this.reservationService.updateReservation(reservation).subscribe(
        () => {
          console.log('Reservation updated successfully.');
          window.location.reload();
        },
        (error) => {
          console.error('Error updating reservation:', error);
        }
      );
    } catch (err) {
      console.log('error :', err);
    }
  }
  openPopup(reservation: Reservation): void {
    this.selectedReservation = reservation;
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }
  closePopup(): void {
    this.selectedReservation = {
      id: 0,
    day: "",
    reservedHours: [],
    purpose: '',
    meetingRoom: "",
    user: "",
    };
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
  
}
