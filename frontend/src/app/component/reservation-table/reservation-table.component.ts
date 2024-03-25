import { Component } from '@angular/core';
import { MeetingRoom } from '../../models/meetingRoom';
import { MeetingRoomService } from '../../models/services/meeting-room.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-reservation-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './reservation-table.component.html',
  styleUrl: './reservation-table.component.scss'
})
export class ReservationTableComponent {
  meetingRooms: MeetingRoom[] = []; 

  constructor(private meetingRoomService:MeetingRoomService) {}
  ngOnInit(){
    this.meetingRoomService.getMeetingRoomList().subscribe((data) => {
      this.meetingRooms = data;
    });

  }

}
