import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/shared/vehicle.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/shared/vehicle.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { Servicebooking } from 'src/app/shared/servicebooking.model';
import { ServicebookingService } from 'src/app/shared/servicebooking.service';  
import { NgForm } from '@angular/forms';
import { containsElement } from '@angular/animations/browser/src/render/shared';
import { Payements } from 'src/app/shared/payements.model';
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
currentpriceref:AngularFirestoreCollection<Payements>;
  currentprice$:Observable<Payements[]>;

resdate='';
defaultExampleRadios='';
interior=false;
tyredashdress=false;
lubrication1=false;
engineclean=false;
exteriorwax=false;
engine_oil_and_filter_change=false;
flushreplace=false;
undercariagedegrease=false;
vehiclereg='';
enginescan=false;
imgsrc='../../assets/image/w.jpg';
textservice='welcome to luckvin auto care systems online reservation page';
cardtitle='Luckvin Auto Care Services';
reservedateref:AngularFirestoreCollection<Servicebooking>;
reservedate$:Observable<Servicebooking[]>;
formvalidity=false;
remaining=0;
showremaining=true;
showunavailability=true;
totalpayment=0;
vehicles=[];
carashpackageprice=0;
bodywash='';
price=0;
  constructor(
  private service: VehicleService,
  private firestore:AngularFirestore,
  private toastr: ToastrService,
  public afAuth: AngularFireAuth,
  public authService: AuthService,
  public afs: AngularFirestore,   // Inject Firestore service
  private router: Router,
  private af: AuthService,
  private service1 : ServicebookingService,
 
  ) { 
    
    
    
    
  }

  ngOnInit() {
  
  this.resetForm();
  this.SetUserID();
  console.log(this.usersCustomerId);


   this.afAuth.authState.subscribe(user => {
    if (user) {
      this.usersCustomerId = user.uid;
      console.log(this.usersCustomerId );
      this.vehicleref= this.afs.collection('vehicles',ref=>ref.where('userid','==',this.usersCustomerId).where('status','==','unconfirmed'));
   
 
      // this.vehicleref=this.afs.doc('users/'+this.usersCustomerId).collection('vehicles',ref=>ref.where('status','==','unconfirmed'))
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
    this.currentpriceref=this.afs.collection('prices',ref=>ref.where('identifier','==','001'));
    this.currentprice$=this.currentpriceref.valueChanges();
    this. currentprice$.subscribe(val => {
      if(this.lubrication1){
      this.totalpayment=this.totalpayment+val[0].lubrication;
      }
      else{
        this.totalpayment=this.totalpayment-val[0].lubrication;
      }
      this.price=val[0].lubrication;
    })
    this.imgsrc='../../assets/image/d.jpg';
    this.cardtitle='Lubrication';
    this.textservice='We top up engine oil, transmission fluid, brake fluid, clutch & power steering fluid up to optimal capacity or completely change it using high performance brand lubricants. . ';
     
   }

   changetoundercariage(){
    this.currentpriceref=this.afs.collection('prices',ref=>ref.where('identifier','==','001'));
    this.currentprice$=this.currentpriceref.valueChanges();
    this. currentprice$.subscribe(val => {
      if(this.undercariagedegrease){
      this.totalpayment=this.totalpayment+val[0].undercariagedegrease;
      }
      else{
        this.totalpayment=this.totalpayment-val[0].undercariagedegrease;
      }
      this.price=val[0].undercariagedegrease;
    })
    
    this.imgsrc='../../assets/image/p.jpg';
    this.cardtitle='Undercarriage Degreasing';
    this.textservice='We completely degrease the undercarriage of the automobile, removing accumulated oil and grit using the application of pressure washes with advanced pressure sensors. ';
    
  }
   changetyredress(){
    this.currentpriceref=this.afs.collection('prices',ref=>ref.where('identifier','==','001'));
    this.currentprice$=this.currentpriceref.valueChanges();
    this. currentprice$.subscribe(val => {
      if(this.tyredashdress){
      this.totalpayment=this.totalpayment+val[0].tyredashdress;
      }
      else{
        this.totalpayment=this.totalpayment-val[0].tyredashdress;
      }
      this.price=val[0].tyredashdress;
    })
    this.imgsrc='../../assets/image/l.jpg';
    this.cardtitle='Tyre & Dash Dressing';
    this.textservice='We restore the true colour and natural gloss to the dashboard and leaves tyres looking new.';
    
  }
   changeExteriorax(){
    this.currentpriceref=this.afs.collection('prices',ref=>ref.where('identifier','==','001'));
    this.currentprice$=this.currentpriceref.valueChanges();
    this. currentprice$.subscribe(val => {
      if(this.exteriorwax){
      this.totalpayment=this.totalpayment+val[0].exteriorwax;
      }
      else{
        this.totalpayment=this.totalpayment-val[0].exteriorwax;
      }
      this.price=val[0].exteriorwax;
    })
    this.imgsrc='../../assets/image/q.png';
    this.cardtitle='Exterior Waxing';
    this.textservice='We apply a hard wax with a clear coat that produces a high-gloss finish to new or old car paint. The wax also acts as a protective layer that helps maintain the paint and protect it for longer.';
   
  }
   changeInterior(){
    this.currentpriceref=this.afs.collection('prices',ref=>ref.where('identifier','==','001'));
    this.currentprice$=this.currentpriceref.valueChanges();
    this. currentprice$.subscribe(val => {
      if(this.interior){
      this.totalpayment=this.totalpayment+val[0].interior;
      }
      else{
        this.totalpayment=this.totalpayment-val[0].interior;
      }
      this.price=val[0].interior;
    })
    this.imgsrc='../../assets/image/f.jpg';
    this.cardtitle='Interior Detaiing';
    this.textservice='involves a deep cleaning of the whole interior cabin of the automobile. includes, Removal of seats, Cleaning of seats,Drying of seats,Vacuum cleaning';
   
  }
// photoes have to be updated
    changeengineOilFilter(){
      this.currentpriceref=this.afs.collection('prices',ref=>ref.where('identifier','==','001'));
      this.currentprice$=this.currentpriceref.valueChanges();
      this. currentprice$.subscribe(val => {
        if(this.engine_oil_and_filter_change){
        this.totalpayment=this.totalpayment+val[0].engine_oil_and_filter_change;
        }
        else{
          this.totalpayment=this.totalpayment-val[0].engine_oil_and_filter_change;
        }
        this.price=val[0].engine_oil_and_filter_change;
      })
    this.imgsrc='../../assets/image/4.jpg';
    this.cardtitle='Engine oil and Filter changing';
    this.textservice='We keep your engine running smoothly with regularly scheduled oil changes';
   
  }
    EngineCleaning(){
      this.currentpriceref=this.afs.collection('prices',ref=>ref.where('identifier','==','001'));
      this.currentprice$=this.currentpriceref.valueChanges();
      this. currentprice$.subscribe(val => {
        if(this.engineclean){
        this.totalpayment=this.totalpayment+val[0].engineclean;
        }
        else{
          this.totalpayment=this.totalpayment-val[0].engineclean;
        }
        this.price=val[0].engineclean;
      })
    this.imgsrc='../../assets/image/2.jpg';
    this.cardtitle='Enging Cleaning';
    this.textservice='Over time the engine collects grease and sludge deposits. At luckvin Car Care we clean out your engine using special cleaning fluid ';
    
  }
    RadiatorcoolerntReplace(){
      this.currentpriceref=this.afs.collection('prices',ref=>ref.where('identifier','==','001'));
      this.currentprice$=this.currentpriceref.valueChanges();
      this. currentprice$.subscribe(val => {
        if(this.flushreplace){
        this.totalpayment=this.totalpayment+val[0].flushreplace;
        }
        else{
          this.totalpayment=this.totalpayment-val[0].flushreplace;
        }
        this.price=val[0].flushreplace;
      })
    this.imgsrc='../../assets/image/3.jpg';
    this.cardtitle='Radiator coolent flush replacement';
    this.textservice='A car radiator is responsible for keeping the engine cool. Over a period of time sediment builds up and decreases cooling efficiency. '; 
    
  }
    EngineScan(){
      this.currentpriceref=this.afs.collection('prices',ref=>ref.where('identifier','==','001'));
      this.currentprice$=this.currentpriceref.valueChanges();
      this. currentprice$.subscribe(val => {
        if(this.enginescan){
        this.totalpayment=this.totalpayment+val[0].enginescan;
        }
        else{
          this.totalpayment=this.totalpayment-val[0].enginescan;
        }
        this.price=val[0].enginescan;
      })
     
      this.imgsrc='../../assets/image/1.jpg';
      this.cardtitle='Engine Scanning';
      this.textservice='Our engine scanning uses state of the art diagnostic tools to identify and correct faults in your engine. Engine malfunctions can be quickly diagnosed and fixed.'; 
      
      
    }
    carwashpackagepayement(){
      this.currentpriceref=this.afs.collection('prices',ref=>ref.where('identifier','==','001'));
      this.currentprice$=this.currentpriceref.valueChanges();
      this.totalpayment=this.totalpayment-this.carashpackageprice;
      console.log(this.bodywash)
      if(this.bodywash=='quickwash'){
        
        this.carashpackageprice=0;  
        this. currentprice$.subscribe(val => {
          this.carashpackageprice=this.carashpackageprice+val[0].quickwash;
          this.totalpayment=this.totalpayment+this.carashpackageprice;
          this.price=val[0].quickwash;
        })
        
      }
      if(this.bodywash=='detailedwash'){
        this.carashpackageprice=0;
        this. currentprice$.subscribe(val => {
          this.carashpackageprice=this.carashpackageprice+val[0].detailledwash;
          this.totalpayment=this.totalpayment+this.carashpackageprice;
          this.price=val[0].detailledwash;
        })
      }
      if(this.bodywash=='washwax'){
        this.carashpackageprice=0;
        this. currentprice$.subscribe(val => {
          this.carashpackageprice=this.carashpackageprice+val[0].washandax;
          this.totalpayment=this.totalpayment+this.carashpackageprice;
          this.price=val[0].washandax;
        })
      }
      if(this.bodywash=='autowash'){
        this.carashpackageprice=0;
        this. currentprice$.subscribe(val => {
          this.carashpackageprice=this.carashpackageprice+val[0].autowash;
          this.totalpayment=this.totalpayment+this.carashpackageprice;
          this.price=val[0].autowash;
        })
      }
     
    }
    selectdate(form:NgForm){
      console.log("working");
      const date=this.resdate;
      console.log(date);
      this.reservedateref=this.afs.collection('service',ref=>ref.where('resdate','==',date));
      this.reservedate$=this.reservedateref.valueChanges();

      this.reservedate$.subscribe(val => {
        if(val.length >= 8){
         this.formvalidity=true;
         this.showunavailability=false;
        
         
        }
        else{
          const numberofreservations=val.length;
          this.remaining=8-numberofreservations;
          this.showremaining=false;
        }
        
        }
  );
  
    }
    
  resetForm(form ? :NgForm){
    if(form != null)
      form.resetForm();
    
     
     this.service1.formData={
      id:null,
      bodywash:'',
      resdate:new Date(),
      interior:false,
      lubrication:false,
      undercariagedegrease:false,
      tyredashdress:false,
      exteriorwax:false,
      engine_oil_and_filter_change:false,
      engineclean:false,
      flushreplace:false,
      enginescan:false,
      vehiclereg:'',
      status:'',
     }
  
     
  
    }

    onSubmit(form:NgForm){
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.usersCustomerId = user.uid;
          } 
      }) 
      let data=form.value;
      data.status='ongoing';
      data.customerid=this.usersCustomerId; 
      this.firestore.collection('service').add(data);
      this.resetForm();
      this.toastr.success('Luckvin Auto care','your reservation has been succussfully placed')  
    }
}
