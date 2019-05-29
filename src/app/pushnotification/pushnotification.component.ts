import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';
import { PushNotificationOptions, PushNotificationService } from 'ngx-push-notifications';
import { interval, Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from '../shared/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';
import { auth, User } from 'firebase/app';
import { License } from '../shared/license.model';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-pushnotification',
  templateUrl: './pushnotification.component.html',
  styleUrls: ['./pushnotification.component.css']
})
export class PushnotificationComponent implements OnInit {
  usersCustomerId ='';
licenseref:AngularFirestoreCollection<License>;
lisense$:Observable<License[]>;
licenseref1:AngularFirestoreCollection<License>;
lisense1$:Observable<License[]>;
lengtharray=0;
InsuranceID='';
InsuranceExpiryDate=new Date();
InsuranceCompany='';
RLStartDate=new Date();
RLExpiryDate=new Date();
VETExpiryDate=new Date();
firstRlsdate=new Date();
differentRsldate=0;
differentInsDate=0;
jstoday='';
today= new Date();
percentageForRTL=0;
percentageForIns=0;
variable1='50%';
variable2='50%';
rtluseddates=0;
insuseddates=0;
alertclass="true";
alertclassins="true";
  constructor(private _pushNotificationService: PushNotificationService,
    public authService: AuthService,
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth,
    private router: Router,
    private af: AuthService,
    private firestore: AngularFirestore,) {

    
     }

  ngOnInit() {
  const isGranted = this._pushNotificationService.isPermissionGranted;
  this._pushNotificationService.requestPermission();
   setInterval(()=>{
      this.checkforexpiry();
    },2000000000);
  
  }

  myFunction(Message:any) {
    let title = Message;
    let message =Message;
    const options = new PushNotificationOptions();
    options.body = "Its time to renewal";
 
    this._pushNotificationService.create(title, options).subscribe((notif) => {
      if (notif.event.type === 'show') {
        console.log('onshow');
        setTimeout(() => {
          notif.notification.close();
        }, 8000);
      }
      if (notif.event.type === 'click') {
        console.log('click');
        notif.notification.close();
      }
      if (notif.event.type === 'close') {
        console.log('close');
      }
    },
    (err) => {
         console.log(err);
    });
}

checkforexpiry(){
  this.afAuth.authState.subscribe(user => {
    if (user) {
      this.usersCustomerId = user.uid;
      console.log(this.usersCustomerId );
      this.licenseref=this.firestore.doc('users/'+this.usersCustomerId).collection('licenses')
      this.lisense$=this.licenseref.valueChanges();
      this.lisense$.subscribe(val => {
         this.lengtharray=val.length;
         console.log(this.lengtharray)
          this.licenseref1=this.firestore.doc('users/'+this.usersCustomerId).collection('licenses',ref=>ref.where('identifier','==',this.lengtharray))
          this.lisense1$=this.licenseref1.valueChanges();
          this.lisense1$.subscribe(val => {
            console.log(val);
            this.RLStartDate=val[0].RLStartDate;
            this.RLExpiryDate=val[0].RLExpiryDate;
            this.InsuranceExpiryDate=val[0].InsuranceExpiryDate;
            this.VETExpiryDate=val[0].VETExpiryDate;

            this.jstoday = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');
            
            var oneDay = 24*60*60*1000;
            var secondDate = new Date(this.jstoday);
            var firstDate = new Date(this.RLExpiryDate);
            this.differentRsldate=Math.round((firstDate.getTime() - secondDate.getTime())/(oneDay));
            this.rtluseddates=365-this.differentRsldate
            this.percentageForRTL=(365-this.differentRsldate)/3.65
            this.variable1=this.percentageForRTL+'%';
            if(this.differentRsldate<=0){
              let message="Your Revenue license or Insuarence might be expired";
              this.myFunction(message);
            }

            var seconddateins= new Date(this.jstoday);
            var firstdateins=new Date(this.InsuranceExpiryDate);
            this.differentInsDate=Math.round((firstdateins.getTime() - seconddateins.getTime())/(oneDay));
            this.insuseddates=365-this.differentInsDate;
            this.percentageForIns=(365-this.differentInsDate)/3.65;
            this.variable2=this.percentageForIns +'%';
            if(this.differentInsDate<=0){
              this.myFunction("Your Revenue license or Insuarence might be expired");
            }
          });
        });
     
    } 
  })
}
}
