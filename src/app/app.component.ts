import { Component } from '@angular/core';
import { PushNotificationOptions, PushNotificationService } from 'ngx-push-notifications';
import { interval, Subscription } from 'rxjs';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  title = 'authenticatesys';
  subscription: Subscription;
  

constructor(private _pushNotificationService: PushNotificationService) { 
   
}
ngOnInit() {
  
    
}



}
