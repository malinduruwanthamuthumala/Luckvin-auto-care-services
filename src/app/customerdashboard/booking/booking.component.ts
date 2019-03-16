import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/shared/vehicle.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/shared/vehicle.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
 usersCustomerId ='rrer';
 vehicleref:AngularFirestoreCollection<Vehicle>;
 vehicle$:Observable<Vehicle[]>;

  constructor(
  private service: VehicleService,
  private firestore:AngularFirestore,
  private toastr: ToastrService,
  public afAuth: AngularFireAuth,
  public authService: AuthService,
  public afs: AngularFirestore,   // Inject Firestore service
  private router: Router,
  private af: AuthService,
  ) { 
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.usersCustomerId = user.uid;
        console.log(this.usersCustomerId );
        this.vehicleref=this.afs.doc('users/'+this.usersCustomerId).collection('vehicles')
        this.vehicle$=this.vehicleref.valueChanges(); 
      } 
    }) 
    
    
    
  }

  ngOnInit() {
   
   this.getvehicles();
  }

  getvehicles(){
    console.log(this.usersCustomerId);
    this.vehicleref=this.afs.collection('users').doc('this.usersCustomerId ').collection('vehicles')
    this.vehicle$=this.vehicleref.valueChanges(); 
  }

}
