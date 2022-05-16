import {Client} from "./client";
import {Terrain} from "./terrain";

export interface Reservation {
  id:number;
  reference:number;
  client:Client;
  date:string;
  status:number;
  terrain:Terrain;


}
