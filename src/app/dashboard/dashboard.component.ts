import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { Injectable, NgZone } from '@angular/core';

import { auth, User } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

usersCustomerId ='gfhgfh';

  constructor(
    
    public authService: AuthService,
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth,
    private router: Router,
    private af: AuthService,
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.usersCustomerId = user.uid;
        console.log(this.usersCustomerId );
        console.log('sdsd');
      } 
    })
    
   
  }


  ngOnInit() {
    
    
  }


  
}
