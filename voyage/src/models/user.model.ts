import { Trip } from "./trip.model";

export interface User {
    name: String;
    picture: String;
    friends: Array<User>;
    trips: Array<Trip>;
}