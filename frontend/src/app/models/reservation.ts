export interface Reservation {
    id: number | null;
    day: string;
    reservedHours: string[]; 
    purpose: string;
    meetingRoom: string;
    user: string | null;
  }
  