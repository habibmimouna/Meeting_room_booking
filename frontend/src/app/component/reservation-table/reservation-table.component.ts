import { Component } from '@angular/core';
import { MeetingRoom } from '../../models/meetingRoom';
import { MeetingRoomService } from '../../models/services/meeting-room.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';



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

  constructor(private meetingRoomService:MeetingRoomService,private router:Router) {}
  ngOnInit(){
    this.meetingRoomService.getMeetingRoomList().subscribe((data) => {
      this.meetingRooms = data;
    });


  }
  openReservationPage(meetingroom:MeetingRoom) {
    this.router.navigate(['/reservation',meetingroom._id]); // Navigate to reservation page with meeting room ID
  }
}
