import { Component, OnInit } from '@angular/core';
import { LicenseService } from '../shared/license.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-licence-type',
  templateUrl: './licence-type.component.html',
  styleUrls: ['./licence-type.component.css']
})
export class LicenceTypeComponent implements OnInit {
  usersCustomerId ='';
  constructor(private service: LicenseService,
  private firestore: AngularFirestore,
  public afAuth: AngularFireAuth,) { }

  ngOnInit() {
    this.resetForm();
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

      }
    }

    onSubmit(form:NgForm){
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.usersCustomerId = user.uid;
         } 
      }) 
      let data=form.value;
      console.log(data);
      this.firestore.doc('users/'+this.usersCustomerId).collection('licenses').add(data);
      this,this.resetForm(form);
    }
}
