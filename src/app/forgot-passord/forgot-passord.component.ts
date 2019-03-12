import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: 'forgot-passord.component.html',
  styleUrls: ['forgot-passord.component.css']
})

export class ForgotPassordComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

}
