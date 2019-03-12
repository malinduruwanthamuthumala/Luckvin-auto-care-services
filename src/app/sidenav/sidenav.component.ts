import { Component, OnInit } from '@angular/core';

import { AuthService } from "../shared/services/auth.service";
import { Injectable, NgZone } from '@angular/core';

import { auth, User } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor( public authService: AuthService,
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth,
    private router: Router,
    private af: AuthService,) { 
    
  }

  ngOnInit() {
  }

}
