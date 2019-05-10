
import {Component, ViewChild, ViewEncapsulation, OnInit} from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';
import { Router } from "@angular/router";
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Servicebooking } from '../shared/servicebooking.model';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import {formatDate } from '@angular/common';
import { Vehicle } from '../shared/vehicle.model';
import { Result } from '@zxing/library';
import { AssertionResult } from 'protractor/built/plugins';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.component.html',
  styleUrls: ['./qrscanner.component.css']
})
export class QrscannerComponent implements OnInit {
  @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent ;
  webcam=false;
  alertbox=true;
  reservationdiv=true;
  serviceref:AngularFirestoreCollection<Servicebooking>;
  service$:Observable<Servicebooking[]>;
  vehicleref:AngularFirestoreCollection<Vehicle>;
  vehicle$:Observable<Vehicle[]>
  today= new Date();
  jstoday = '';
  list:Vehicle[];
  vehicleid='';
  colorstatus='red';
  
  list1=[];
  vehicleid1=''
  constructor(
    public router: Router,
    
    private afs: AngularFirestore,
    
    private firestore:AngularFirestore,
    
   
  ) {
    
   }

  ngOnInit() {
   

    this.qrScannerComponent.getMediaDevices().then(devices => {
      console.log(devices);
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
          if (device.kind.toString() === 'videoinput') {
              videoDevices.push(device);
          }
      }
      if (videoDevices.length > 0){
          let choosenDev;
          for (const dev of videoDevices){
              if (dev.label.includes('front')){
                  choosenDev = dev;
                  break;
              }
          }
          if (choosenDev) {
              this.qrScannerComponent.chooseCamera.next(choosenDev);
          } else {
              this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
          }
      }
  });
  
  this.qrScannerComponent.capturedQr.subscribe(result => {
      console.log(result);
      
      this.jstoday = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');
      console.log(this.jstoday)
      this.webcam=true;
      this.reservationdiv=false;
      this.serviceref=this.afs.collection('service',ref=>ref.where('vehiclereg','==',result).where('resdate','==',this.jstoday));
      this.service$=this.serviceref.valueChanges(); 
      this.vehicleref=this.afs.collection('vehicles',ref=>ref.where('Reg_no','==',result));
      this.vehicle$=this.vehicleref.valueChanges();
      console.log(this.vehicleref);
      
      this.vehicle$.subscribe(val => {
      if(val){
        this.vehicleid=val[0].Reg_no;
      }
      console.log(this.vehicleid);
      }
      
);
      this.service$.subscribe(result=>{
        if(result.length==0){
          this.alertbox=false;
          
        }else{
          this.alertbox=true;
        }
      })
      console.log(this.vehicleid)
      this.afs.collection('service',ref=>ref.where('status','==','ongoing').where('vehiclereg','==',result)).snapshotChanges().subscribe(actionArray => {
        this.list1 = actionArray.map(item=>{
           return { 
             id: item.payload.doc.id,
             ...item.payload.doc.data()
           } as Servicebooking
       
         })
        
       });
       console.log(this.list1)
  });

  
}
onsubmitready(id:string){
  
  this.colorstatus='green';
  
  let data = Object.assign({});
  data.status="finished ready to pickup";
  this.firestore.collection('service').doc(id).update(data);

}



}


