import { Component } from '@angular/core';
import { ReservationTableComponent } from '../../component/reservation-table/reservation-table.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { MeetingRoomService } from '../../models/services/meeting-room.service';
import { MeetingRoom } from '../../models/meetingRoom';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservation-admin',
  standalone: true,
  imports: [ReservationTableComponent,NavbarComponent,FormsModule],
  templateUrl: './meetingroom-list-admin.component.html',
  styleUrl: './meetingroom-list-admin.component.scss'
})
export class meetingRoomListAdminComponent {
   newMeetingRoom:MeetingRoom ={
    _id:null,
    name:"",
    capacity: 0,
    location:"" ,
    equipment:"",
    
  }

  constructor(private meetingRoomService:MeetingRoomService) {}

  async onBtnAddClicked (){
    await this.meetingRoomService.createMeetingRoom(this.newMeetingRoom).subscribe((data) => {
      console.log('meeting room added',data);
      window.location.reload();
      
    }, (error) => {
      console.error('Error adding meeting room:', error);
    })
    
}
}
