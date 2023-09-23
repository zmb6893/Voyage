import { Hours } from "./hours.model";

export interface Location {
    name: String;
    zipcode: String;
    address: String;
    website: String;
    hours: Hours;
}