import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { PriceupdateService } from 'src/app/shared/priceupdate.service';
import { VehicleService } from 'src/app/shared/vehicle.service';
import { NgForm } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { Vehicle } from 'src/app/shared/vehicle.model';
import { database } from 'firebase';
@Component({
  selector: 'app-confirmvehiclereg',
  templateUrl: './confirmvehiclereg.component.html',
  styleUrls: ['./confirmvehiclereg.component.css']
})
export class ConfirmvehicleregComponent implements OnInit {
  vehicleref:AngularFirestoreCollection<Vehicle>;
  vehicle$:Observable<Vehicle[]>;
  vehicle:[];
  Reg_no='';
  list:Vehicle[];
  constructor(
    private service: VehicleService,
    private firestore:AngularFirestore,
    private toastr: ToastrService,
    public afAuth: AngularFireAuth,
    public authService: AuthService,
    public afs: AngularFirestore,   // Inject Firestore service
    private router: Router,
    private af: AuthService,
    private service1 : PriceupdateService,
  ) { }

  ngOnInit() {
    // this.vehicleref= this.afs.collection('vehicles',ref=>ref.where('status','==','unconfirmed'));
    // this.vehicle$=this.vehicleref.valueChanges()
    // this.list=;
    // this.afs.collection('vehicles',ref=>ref.where('status','==','unconfirmed')).snapshotChanges().subscribe(val=>{
    //   console.log(val)
    this.service.getallVehicles().subscribe(actionArray => {
      this.list = actionArray.map(item=>{
         return { 
           id: item.payload.doc.id,
           ...item.payload.doc.data()
         } as Vehicle
     
       })
       console.log(this.list)
     });
  }

  onsubmit(id :string ){
    
    
     let data = Object.assign({});
     data.status="confirmed";
     this.firestore.collection('vehicles').doc(id).update(data);
    this.toastr.success('Luckvin Auto care','successfully confirmed') 
     
  }
}
