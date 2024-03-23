import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MeetingRoom } from '../meetingRoom';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {
  private baseURL = 'http://localhost:5000/meeting-Rooms/meeting-rooms';

  constructor(private httpClient: HttpClient) {}
  createMeetingRoom(meetingRoom:MeetingRoom): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, meetingRoom);
  }

  deleteMeetingRoom(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getMeetingRoomById(id: number): Observable<MeetingRoom> {
    return this.httpClient.get<MeetingRoom>(`${this.baseURL}/${id}`);
  }
  getMeetingRoomList(): Observable<MeetingRoom[]> {
    return this.httpClient.get<MeetingRoom[]>(`${this.baseURL}`);
  }

  updateMeetingRoom(id: number, meetingRoom: MeetingRoom): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, meetingRoom);
  }
}
