import { Injectable } from '@angular/core';
import { Servicebooking } from './servicebooking.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicebookingService {
usersCustomerId 
formData:Servicebooking;
  constructor(
    private firestore:AngularFirestore,
    public authService: AuthService,
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth,
    private router: Router,
    private af: AuthService,
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.usersCustomerId = user.uid;
        
      } 
    }) 
   }
   getongoingreservations(){
    return this.afs.collection('service',ref=>ref.where('customerid','==',this.usersCustomerId).where('status','==','ongoing')).snapshotChanges();
   }
}
