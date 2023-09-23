import { Activity } from "./activity.model";

export interface Trip {
    id: number;
    name: String;
    date: Date;
    activities: Array<Activity>;
    shareable: boolean;
}