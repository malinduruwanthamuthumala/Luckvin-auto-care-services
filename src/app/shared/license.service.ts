import { Injectable } from '@angular/core';
import {License} from './license.model';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {
formData:License;
  constructor() { }
}
