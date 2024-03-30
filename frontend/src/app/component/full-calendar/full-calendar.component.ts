import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-calendar',
  standalone: true,
  imports:[NgFor,NgIf],
  templateUrl: './full-calendar.component.html',
  styleUrl: './full-calendar.component.scss'
})
export class FullCalendarComponent implements OnInit {
  currentDate: Date = new Date();
  selectedYear: number=0;
  selectedMonth: number=0;
  daysInMonth: Date[] = [];
  selectedDay: Date | null = null;
  hoursOfDay: string[] = [];
  selectedHours: string[] = [];
  hasCheckedHours: boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.selectedYear = this.currentDate.getFullYear();
    this.selectedMonth = this.currentDate.getMonth() + 1;
    this.generateDaysInMonth();
  }

  generateDaysInMonth(): void {
    this.daysInMonth = [];
    const numDays = new Date(this.selectedYear, this.selectedMonth, 0).getDate();
    for (let i = 1; i <= numDays; i++) {
      this.daysInMonth.push(new Date(this.selectedYear, this.selectedMonth - 1, i));
    }
  }

  changeMonth(delta: number): void {
    const newDate = new Date(this.selectedYear, this.selectedMonth - 1 + delta);
    this.selectedYear = newDate.getFullYear();
    this.selectedMonth = newDate.getMonth() + 1;
    this.generateDaysInMonth();
  }

  showHours(day: Date): void {
    if (this.selectedDay === day) {
      this.selectedDay = null;
      this.hoursOfDay = [];
    } else {
      this.selectedDay = day;
      this.generateHoursOfDay();
    }
  }

  generateHoursOfDay(): void {
    this.hoursOfDay = [];
    for (let i = 8; i < 17; i++) {
      this.hoursOfDay.push(`${i}-${i + 1}`);
    }
  }
  toggleHour(hour: string): void {
    const index = this.selectedHours.indexOf(hour);
    if (index === -1) {
      this.selectedHours.push(hour);
    } else {
      this.selectedHours.splice(index, 1);
    }
    this.updateCheckedStatus();
  }
  updateCheckedStatus(): void {
    this.hasCheckedHours = this.selectedHours.length > 0;
  }
  isSelectedHour(hour: string): boolean {
    return this.selectedHours.includes(hour);
  }
  selectDay(day: Date): void {
    console.log("Selected day:", day); // You can handle the selected day here
    // Add your logic for handling the selected day, such as setting a CSS class or triggering an action
}
  reserveHours(): void {
    console.log('Selected hours:', this.selectedHours);
    
    this.selectedHours = [];
    this.updateCheckedStatus();
  }
  
  
}