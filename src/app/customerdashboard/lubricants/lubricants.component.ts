import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Vehicle} from '../../shared/vehicle.model'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lubricants',
  templateUrl: './lubricants.component.html',
  styleUrls: ['./lubricants.component.css']
})
export class LubricantsComponent implements OnInit {
  vehicleref:AngularFirestoreCollection<Vehicle>;
  vehicle$:Observable<Vehicle[]>;
  constructor(
    
    public afs:AngularFirestore,
    
  ) {
    this.vehicleref = this.afs.collection('vehicle');
    this.vehicle$=this.vehicleref.valueChanges();
   }

  ngOnInit() {
  }

}
