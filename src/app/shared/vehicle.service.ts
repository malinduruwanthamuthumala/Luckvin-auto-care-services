import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";


import { auth, User } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  FormData :Vehicle;
  usersCustomerId='';
  
  constructor(private firestore:AngularFirestore,
    public authService: AuthService,
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth,
    private router: Router,
    private af: AuthService,) { 
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.usersCustomerId = user.uid;
          
        } 
      }) 
     
    }

  getVehicles(){
   
  return this.afs.collection('vehicles',ref=>ref.where('userid','==',this.usersCustomerId)).snapshotChanges();
   
  }
getallVehicles(){
  return this.afs.collection('vehicles',ref=>ref.where('status','==',"unconfirmed")).snapshotChanges();
}
  
}
