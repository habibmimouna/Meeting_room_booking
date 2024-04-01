export interface Reservation {
    id: number;
    day: string;
    reservedHours: string[]; 
    purpose: string;
    meetingRoom: string;
    user: string | null;
  }
  