import { Component, OnInit } from '@angular/core';
import { LicenseService } from '../shared/license.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { License } from '../shared/license.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-licence-type',
  templateUrl: './licence-type.component.html',
  styleUrls: ['./licence-type.component.css']
})
export class LicenceTypeComponent implements OnInit {
  usersCustomerId ='';
  lengtharray=0;
 
  constructor(private service: LicenseService,
  private firestore: AngularFirestore,
  public afAuth: AngularFireAuth,
  public afs: AngularFirestore, 
  private toastr: ToastrService,) { }
  licenseref:AngularFirestoreCollection<License>;
  lisense$:Observable<License[]>;
  licenseref1:AngularFirestoreCollection<License>;
  lisense1$:Observable<License[]>;
  ngOnInit() {

     
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.usersCustomerId = user.uid;
        console.log(this.usersCustomerId)
        this.licenseref=this.firestore.doc('users/'+this.usersCustomerId).collection('licenses')
        this.lisense$=this.licenseref.valueChanges();
        this.lisense$.subscribe(val => {
           this.lengtharray=val.length;
          });
          
       } 
    }) 
    
     
    
  }
    resetForm(form?: NgForm){
      if(form!=null)
      form.resetForm();
      this.service.formData = {
        id:null,
        InsuranceID:'',
        InsuranceExpiryDate:new Date(),
        InsuranceCompany:'',
        RLStartDate:new Date(),
        RLExpiryDate:new Date(),
        VETExpiryDate:new Date(),
        identifier:0
      }
    }

    onSubmit(form:NgForm){
      
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.usersCustomerId = user.uid;
          
         } 
        
      }) 
     
      
      let data=form.value;
      data.identifier=form.value.lengtharray+1
      console.log(data);
      console.log(this.usersCustomerId)
      console.log(this.lengtharray)
      this.firestore.doc('users/'+this.usersCustomerId).collection('licenses').add(data);
      this.toastr.success('Luckvin Auto care','license details has been successfully added')  
    }
}
