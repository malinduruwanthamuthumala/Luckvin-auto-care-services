import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/shared/vehicle.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/auth';

import { AuthService } from "../../../shared/services/auth.service";
import { Injectable, NgZone } from '@angular/core';

import { auth, User } from 'firebase/app';

import { Router } from "@angular/router";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  usersCustomerId ='';
  alertreg=true;
  alertdel=true;
  alertclass="";
  alertbody="";
  constructor(private service: VehicleService,
  private firestore:AngularFirestore,
  private toastr: ToastrService,
  public afAuth: AngularFireAuth,
  public authService: AuthService,
  public afs: AngularFirestore,   // Inject Firestore service
  private router: Router,
  private af: AuthService,)
  {
    
    

  }

  ngOnInit() {
    this.resetForm();
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.usersCustomerId = user.uid;
       } 
    }) 
    
    console.log(this.usersCustomerId );
    }

  resetForm(form ? :NgForm){
  if(form != null)
    form.resetForm();
  
   
   this.service.FormData={
    id:null,
    vehicle_type:'',
    model:'',
    Odometer_reading:'',
    last_service_date:'',   
    Reg_no:'',
    status:'',
   }

   

  }

  onSubmit(form: NgForm){
    let data = Object.assign({},form.value);
    delete data.id;
    data.status='unconfirmed';
    if(form.value.id==null) {
      this.firestore.firestore.doc('users/' +this.usersCustomerId ).collection('vehicles').add(data);
    }else{
      this.firestore.firestore.doc('users/' +this.usersCustomerId ).collection('vehicles').doc(form.value.id).update(data);
    }
   
   
    this.resetForm(form);
    this.toastr.success('Hello world!', 'Toastr fun!');
    this.alertreg=false;
    this.alertclass='alert alert-success';
    this.alertbody='vehicle registered successfully'
    setTimeout( () => {
       this.alertreg=false;
  }, 1500);
    
    
  }

  

 }



