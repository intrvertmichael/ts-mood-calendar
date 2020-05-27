

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

export interface CalendarDetails {
  year2020:{}
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
  month:number,
  day:number
}