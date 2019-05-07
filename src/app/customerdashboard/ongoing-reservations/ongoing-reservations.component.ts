import { Component, OnInit } from '@angular/core';
import { Servicebooking } from 'src/app/shared/servicebooking.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ServicebookingService } from 'src/app/shared/servicebooking.service';
import {formatDate } from '@angular/common';
@Component({
  selector: 'app-ongoing-reservations',
  templateUrl: './ongoing-reservations.component.html',
  styleUrls: ['./ongoing-reservations.component.css']
})
export class OngoingReservationsComponent implements OnInit {
 list=[];
 moredays=0;
 jstoday=''
 today= new Date();
 resdate=new Date();
 differentInsDate=0;
 string123='sdfsdf';
 
  constructor(
    private service: ServicebookingService,
    private firestore:AngularFirestore,
    private toastr: ToastrService,
    public afAuth: AngularFireAuth,
    public authService: AuthService,
    public afs: AngularFirestore,   // Inject Firestore service
    private af: AuthService,
  ) { }

  ngOnInit() {
    this.service.getongoingreservations().subscribe(actionArray => {
      this.list = actionArray.map(item=>{
         return { 
           id: item.payload.doc.id,
           ...item.payload.doc.data()
         } as Servicebooking
     
       })
      
     });

    
     
  }
  getremainingdays(resdate1:string){
  
  var oneDay = 24*60*60*1000;
  this.jstoday = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');
  var seconddateins= new Date(this.jstoday);
  var firstdateins=new Date(resdate1);
  this.differentInsDate=Math.round((firstdateins.getTime() - seconddateins.getTime())/(oneDay));
  return this.differentInsDate;
   }
   onsubmit(id :string){
    
    let data = Object.assign({});
    data.status="canselled";
    this.firestore.collection('service').doc(id).update(data);
   this.toastr.warning('Luckvin Auto care','Your service date reservation has been cancelled') 
   }
}
