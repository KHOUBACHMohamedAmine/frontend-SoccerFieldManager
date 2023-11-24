import {Client} from "./client";
import {Terrain} from "./terrain";

export interface Reservation {
  id?:number;
  reference?:number;
  client?:Client;
  date?:any;
  status?:number;
  terrain?:Terrain;
  hour?:number;

}
