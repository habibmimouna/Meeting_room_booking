import { Component } from '@angular/core';
import { MeetingRoom } from '../../models/meetingRoom';
import { MeetingRoomService } from '../../models/services/meeting-room.service';
import { NgFor, NgIf } from '@angular/common';



@Component({
  selector: 'app-reservation-table',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './reservation-table.component.html',
  styleUrl: './reservation-table.component.scss'
})
export class ReservationTableComponent {
  meetingRooms: MeetingRoom[] = []; 
  showReservationPopup: boolean = false;
  selectedMeetingRoom: any;

  constructor(private meetingRoomService:MeetingRoomService) {}
  ngOnInit(){
    this.meetingRoomService.getMeetingRoomList().subscribe((data) => {
      this.meetingRooms = data;
    });

  }
}
