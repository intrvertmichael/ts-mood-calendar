import { CalendarDetails, MonthDetails } from './_calendar_types';

export type GetStateDetails = () => AppStateDetails;

export interface AppStateDetails {
	current: CurrentReducerDetails;
	calendar: CalendarDetails;
	firebase: {
		auth: {
			uid: string;
			displayName: string;
			email: string;
		};
	};
	firestore: {
		data: {
			userCalendars: {
				[key: string]: {
					[key: string]: object;
				};
			};
		};
	};
}

export interface CalendarReducerDetails {
	calendar: CalendarDetails;
	type: string;
	year: number;
	month: MonthDetails;
	monthNum: number;
	monthName: string;
	day: object;
	dayNum: number;
	dayName: string;
	mood: number;
	message: string;
}

export interface CurrentReducerDetails {
	type: string;
	modalOpen: boolean;
	year: number;
	month: number;
	day: number;
	timesFirestoreLoaded: number;
}
