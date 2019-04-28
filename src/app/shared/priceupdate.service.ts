import { Injectable } from '@angular/core';
import { Payements} from './payements.model';

@Injectable({
  providedIn: 'root'
})
export class PriceupdateService {
formData:Payements;
  constructor() { }
}
