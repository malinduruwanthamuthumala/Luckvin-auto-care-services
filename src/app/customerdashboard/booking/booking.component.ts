import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/shared/vehicle.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/shared/vehicle.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
usersCustomerId ='rrer';
vehicleref:AngularFirestoreCollection<Vehicle>;
vehicle$:Observable<Vehicle[]>;
vehiclestatus:BehaviorSubject<string>;
vehiclereg='';
resdate='';
defaultExampleRadios='';
interior="";
tyredashdress='';
lubrication1="";
engineclean='';
exteriorwax="";
engine_oil_and_filter_change='';
flushreplace='';
undercariagedegrease='';
enginescan='';
imgsrc='../../assets/image/w.jpg';
textservice='welcome to luckvin auto care systems online reservation page';
cardtitle='Luckvin Auto Care Services';

vehicles=[];
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
    
    
    
    
  }

  ngOnInit() {
  
  
  this.SetUserID();
  console.log(this.usersCustomerId);


   this.afAuth.authState.subscribe(user => {
    if (user) {
      this.usersCustomerId = user.uid;
      console.log(this.usersCustomerId );
      this.vehicleref=this.afs.doc('users/'+this.usersCustomerId).collection('vehicles',ref=>ref.where('status','==','unconfirmed'))
      this.vehicle$=this.vehicleref.valueChanges(); 
      this.toastr.warning('you will not be allowed to places an reservation unless your vehicle get confirmed . sorry for the inconvinience');
       
      
    } 
  }) 

  
  }

  getvehicles(){
    console.log(this.usersCustomerId);
    this.vehicleref=this.afs.collection('users').doc('this.usersCustomerId ').collection('vehicles')
    this.vehicle$=this.vehicleref.valueChanges(); 
  }

  SetUserID(){
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.usersCustomerId = user.uid;
        } 
    }) 
  }

  changecardInfo(){
    this.imgsrc='../../assets/image/d.jpg';
    this.cardtitle='Lubrication';
    this.textservice='We top up engine oil, transmission fluid, brake fluid, clutch & power steering fluid up to optimal capacity or completely change it using high performance brand lubricants. . ';
   }
   changetoundercariage(){
    this.imgsrc='../../assets/image/p.jpg';
    this.cardtitle='Undercarriage Degreasing';
    this.textservice='We completely degrease the undercarriage of the automobile, removing accumulated oil and grit using the application of pressure washes with advanced pressure sensors. ';
   }
   changetyredress(){
    this.imgsrc='../../assets/image/l.jpg';
    this.cardtitle='Tyre & Dash Dressing';
    this.textservice='We restore the true colour and natural gloss to the dashboard and leaves tyres looking new.';
   }
   changeExteriorax(){
    this.imgsrc='../../assets/image/q.png';
    this.cardtitle='Exterior Waxing';
    this.textservice='We apply a hard wax with a clear coat that produces a high-gloss finish to new or old car paint. The wax also acts as a protective layer that helps maintain the paint and protect it for longer.';
   }
   changeInterior(){
    this.imgsrc='../../assets/image/f.jpg';
    this.cardtitle='Interior Detaiing';
    this.textservice='involves a deep cleaning of the whole interior cabin of the automobile. includes, Removal of seats, Cleaning of seats,Drying of seats,Vacuum cleaning';
    

   }

}
