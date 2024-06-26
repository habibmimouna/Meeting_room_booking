import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { MeetingRoomService } from '../../models/services/meeting-room.service';
import { MeetingRoom } from '../../models/meetingRoom';
import { NgFor } from '@angular/common';
import { ReservationTableComponent } from '../../component/reservation-table/reservation-table.component';


@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [NavbarComponent,ReservationTableComponent,NgFor],
  templateUrl: './meetingroom-list.component.html',
  styleUrl: './meetingroom-list.component.scss'
})
export class meetingRoomListComponent {
  meetingRooms: MeetingRoom[] = []; 

  constructor(private meetingRoomService:MeetingRoomService) {}
  ngOnInit(){
    this.meetingRoomService.getMeetingRoomList().subscribe((data) => {
      this.meetingRooms = data;
    });

  }
}
