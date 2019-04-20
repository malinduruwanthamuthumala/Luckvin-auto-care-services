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
import * as firebase from 'firebase';

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
    userid:this.usersCustomerId,
   }

   

  }

  Photoselected(event:any){
    // const target:HTMLInputElement=<HTMLInputElement>event.target;
    // const files:FileList=event.target.files;
    const file:File=event.target.files[0];
    console.log("selected file name",file.name)
    const metaData={'contentType':file.type
    };
    const storage=fireabase 
  }

  onSubmit(form: NgForm){
    
    let data = Object.assign({},form.value);
    delete data.id;
    data.status='unconfirmed';
    data.userid=this.usersCustomerId;
    if(form.value.id==null) {
      this.firestore.firestore.collection('vehicles').add(data);
    }else{
      this.firestore.firestore.collection('vehicles').doc(form.value.id).update(data);
    }
   
   
    this.resetForm(form);
    
    this.toastr.success('luckvin auto care services','vehicle registered successfully');
    
    
    
  }

  

 }



