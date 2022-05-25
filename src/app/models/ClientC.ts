import {ControlValueAccessor} from "@angular/forms";

export class ClientC implements ControlValueAccessor{
  id?:number;
  nom?:string;
  prenom?:string;
  cin?:string;
  etablissement?:string;
  numapogee?:number;
  numtel?:string;
  sexe?:string;
  isArchived?:boolean;

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }
}
