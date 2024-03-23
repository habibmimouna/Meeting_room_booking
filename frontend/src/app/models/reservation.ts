import {MeetingRoom} from './meetingRoom';
import { User } from './user';

export interface Reservation {
    id:number|null ;
    name:string;
    startTime: string ;
    endTime: string ;
    purpose:string;
    meetingRoom:MeetingRoom;
    user:User

}