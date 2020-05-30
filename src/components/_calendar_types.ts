
export interface CalendarDetails {
  year2020:YearDetails
}

export interface YearDetails {
  month0:MonthDetails,
  month1:MonthDetails,
  month2:MonthDetails,
  month3:MonthDetails,
  month4:MonthDetails,
  month5:MonthDetails,
  month6:MonthDetails,
  month7:MonthDetails,
  month8:MonthDetails,
  month9:MonthDetails,
  month10:MonthDetails,
  month11:MonthDetails
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