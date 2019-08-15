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
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  usersCustomerId ='';
vehicleref:AngularFirestoreCollection<Vehicle>;
vehicle$:Observable<Vehicle[]>;
vehiclestatus:BehaviorSubject<string>;
currentpriceref:AngularFirestoreCollection<Payements>;
currentprice$:Observable<Payements[]>;
vehicletyperef:AngularFirestoreCollection<Vehicle>;
vehicletype$:Observable<Vehicle[]>;

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
transmission:0;
formvalidity=false;
remaining=0;
showremaining=true;
showunavailability=true;
totalpayment=0;
vehicles=[];
carashpackageprice=0;
bodywash='';
price=0;
tp='';
vtype="";
id1='';
list1=[];
engineoil:0;
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
    this.service.getongoinghistory().subscribe(actionArray => {
      this.list1 =actionArray.map(item=>{
         return { 
           id: item.payload.doc.id,
           ...item.payload.doc.data()
         } as Servicebooking
     
       })
      console.log(this.list1);
     });
   
   }

  ngOnInit() {
   
   
  }


}