import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { User } from '../shared/services/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})

export class SignupComponent implements OnInit {
  FormData :User;
  
  constructor(
    public authService: AuthService,
    
    
  ) { 
   
  }

  ngOnInit() { }

 

}