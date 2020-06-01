
export interface CalendarDetails {
  year2020:YearDetails
}

export interface YearDetails {
  [key: string]: MonthDetails
}

export interface MonthDetails {
  num:number,
  name:string,
  length:number,
  starts:number,
  days:object
}

export interface DayDetails {
  day:number,
  mood:number,
  message:string
}