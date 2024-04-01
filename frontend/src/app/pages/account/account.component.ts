import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { UserService } from '../../models/services/user.service';
import { User } from '../../models/user';
import { ReservationService } from '../../models/services/reservation.service';
import { Reservation } from '../../models/reservation';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [NavbarComponent,NgFor],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  userReservations:Reservation[]=[]
  user: User = {
    _id: "",
    fullName: '',
    email: '',
    password: '',
    phone: '',
    username: '',
    isAdmin: false,
  };

  constructor(
    private userService: UserService,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.getUserFromLocalStorage();
    this.getUserReservations(this.user._id)
  }

  getUserFromLocalStorage(): void {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      try {
        const userObject: User = JSON.parse(currentUser);
        this.user = userObject;
        this.user._id=userObject._id
        
        
      } catch (error) {
        console.error('Error parsing currentUser JSON:', error);
      }
    } else {
      console.error('No currentUser found in localStorage.');
    }
  }

  async getUserReservations(userId: string): Promise<void> {
    try {
      this.reservationService.getReservationList().subscribe((reservations: Reservation[]) => {
        this.userReservations = reservations.filter(reservation => {
          return reservation.user === userId || reservation.user === null;
        });
        console.log("test", this.userReservations);
      });
    } catch (err) {
      console.error("Error:", err);
    }
  }
  deleteReservation(reservation: Reservation): void {
    try{
    this.reservationService.deleteReservation(reservation._id).subscribe(() => {
      console.log('Reservation deleted successfully.');
    }, (error) => {
      console.error('Error deleting reservation:', error);
    });
  }catch(err){
    console.log("error :",err);
    
  }
}
 
}

