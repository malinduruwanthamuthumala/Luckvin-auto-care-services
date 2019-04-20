import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/shared/vehicle.service';
import { Vehicle } from 'src/app/shared/vehicle.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from "../../../shared/services/auth.service";
import { Injectable, NgZone } from '@angular/core';
import { auth, User } from 'firebase/app';
import { Router } from "@angular/router";

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
list:Vehicle[];
list2:[];
usersCustomerId='';
VehicleId='';
alertdel=true;
testid='';

  constructor(private service: VehicleService,
    private firestore:AngularFirestore,
    private toastr:ToastrService,
    
 
  public afAuth: AngularFireAuth,
  public authService: AuthService,
  public afs: AngularFirestore,   // Inject Firestore service
  private router: Router,
  private af: AuthService,) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.usersCustomerId = user.uid;
        }
    }) 
    
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.usersCustomerId = user.uid;
        } 
    }) 
    
    this.service.getVehicles().subscribe(actionArray => {
      
      

      this.list = actionArray.map(item=>{
         return { 
           id: item.payload.doc.id,
           ...item.payload.doc.data()
         } as Vehicle
     
       })
       
      
      
     });
   
    
   }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.usersCustomerId = user.uid;
        } 
    }) 
    
    this.service.getVehicles().subscribe(actionArray => {
      
      

      this.list = actionArray.map(item=>{
         return { 
           id: item.payload.doc.id,
           ...item.payload.doc.data()
         } as Vehicle
         
       })
      
       
      
     });

  
    
  
  }

  onEdit(emp:Vehicle){
    this.service.FormData=Object.assign({},emp);

  }

  onDelete(id :string ){
    if(confirm("Are yousure to delete the vehicle")){
      this.firestore.firestore.collection('vehicles').doc(id).delete();
      this.toastr.warning('delete successfully');
      this.alertdel=false;

    }
  }

}
