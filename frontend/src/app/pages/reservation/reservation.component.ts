import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeetingRoomService } from '../../models/services/meeting-room.service';
import { MeetingRoom } from '../../models/meetingRoom';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FullCalendarComponent } from '../../component/full-calendar/full-calendar.component';
import { CustomCalendarComponent } from '../../component/custom-calendar/custom-calendar.component';




@Component({
  selector: 'app-reservation',
  standalone:true,
  imports:[NavbarComponent,FullCalendarComponent,CustomCalendarComponent],
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  
  meetingRoomId:number=0;
  MeetingRoomDetails: MeetingRoom = {
    _id: null,
    name: "",
    capacity: 0,
    location: "",
    equipment: ""
  };

  constructor(private route: ActivatedRoute, private meetingRoomService: MeetingRoomService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('Param value:', params['id']);
      this.meetingRoomId = params['id']; 
      console.log(this.meetingRoomId);
      // Get meeting room ID from route parameter
      this.getMeetingRoomDetails(this.meetingRoomId); // Fetch meeting room details
    });
  }
  

  getMeetingRoomDetails(id: number): void {
    this.meetingRoomService.getMeetingRoomById(id).subscribe(
      (meetingRoom: MeetingRoom) => {
        this.MeetingRoomDetails = meetingRoom;
      },
      (error: any) => {
        console.error('Error fetching meeting room details:', error);
        // Handle error as needed
      }
    );
  }
}
