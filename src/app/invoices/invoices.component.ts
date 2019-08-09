import { Component, OnInit } from '@angular/core';
import 'jspdf';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';


import {QrScannerComponent} from 'angular2-qrscanner';
import { Router } from "@angular/router";
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Servicebooking } from '../shared/servicebooking.model';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import {formatDate } from '@angular/common';
import { Vehicle } from '../shared/vehicle.model';
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  public qrdata: string = null;
  today= new Date();
  registerNo='';
  webcam=false;
  alertbox=true;
  reservationdiv=true;
  serviceref:AngularFirestoreCollection<Servicebooking>;
  service$:Observable<Servicebooking[]>;
  vehicleref:AngularFirestoreCollection<Vehicle>;
  vehicle$:Observable<Vehicle[]>
 
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
  ) { }

  ngOnInit() {
  }


  downloadPdf() {
    let doc = new jsPDF();
    // doc.addHTML(document.getElementById("obrz"), function() {
    //    doc.save("obrz.pdf");
    // });
    html2canvas(document.getElementById('obrz')).then(function(canvas) {
      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      doc.addImage(img,'JPEG',5,20);
      doc.save('testCanvas.pdf');
      });
   
  }

  searchservice(){
    this.serviceref=this.afs.collection('service',ref=>ref.where('vehiclereg','==',this.registerNo).where('resdate','==',this.today));
    this.service$=this.serviceref.valueChanges(); 
  }
}

