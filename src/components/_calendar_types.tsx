
export interface CalendarDetails {
  month:MonthDetails,
  year:number
}

export interface MonthDetails {
  num:number,
  name:string,
  length:number,
  starts:number,
  days:object
}
