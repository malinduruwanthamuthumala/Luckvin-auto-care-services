import { Injectable } from '@angular/core';
import { Servicebooking } from './servicebooking.model';

@Injectable({
  providedIn: 'root'
})
export class ServicebookingService {
formData:Servicebooking;
  constructor() { }
}
