import { Activity } from "./activity.model";
import { DateRange } from "./dateRange.model";
import { Location } from "./location";

export interface Trip {
    id: number;
    name: String;
    dateRange: DateRange;
    activities: Array<Activity>;
    shareable: boolean;
    location: Location;
    budget: number;
}