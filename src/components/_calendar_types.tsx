

// export interface CalendarDetails {
//   month:MonthDetails,
//   year:number
// }

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


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// REDUCER TYPES
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export type GetStateDetails = ()=>AppStateDetails;

export interface AppStateDetails {
  current:CurrentReducerDetails,
  calendar:CalendarDetails
}

export interface CalendarReducerDetails {
  type:string,
  year:number,
  month:object,
  monthNum:number,
  monthName:string,
  day:object,
  dayNum:number,
  dayName:string,
  mood:number,
  message:string
}

export interface CurrentReducerDetails {
  type:string,
  modalOpen:boolean,
  year:number,
  month:MonthDetails,
  day:number
}