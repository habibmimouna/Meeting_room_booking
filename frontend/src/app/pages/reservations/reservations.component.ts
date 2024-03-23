import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { MeetingRoomService } from '../../models/services/meeting-room.service';
import { MeetingRoom } from '../../models/meetingRoom';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [NavbarComponent,NgFor],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss'
})
export class ReservationsComponent {
  meetingRooms: MeetingRoom[] = []; 

  constructor(private meetingRoomService:MeetingRoomService) {}
  ngOnInit(){
    this.meetingRoomService.getMeetingRoomList().subscribe((data) => {
      this.meetingRooms = data;
    });

  }
}
