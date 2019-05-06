import { Component, OnInit } from '@angular/core';
import { Servicebooking } from 'src/app/shared/servicebooking.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ServicebookingService } from 'src/app/shared/servicebooking.service';

@Component({
  selector: 'app-ongoing-reservations',
  templateUrl: './ongoing-reservations.component.html',
  styleUrls: ['./ongoing-reservations.component.css']
})
export class OngoingReservationsComponent implements OnInit {
 list=[];
 moredays=0;
 resdate=new Date();
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

}
