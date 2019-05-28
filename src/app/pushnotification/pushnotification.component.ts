import { Component, OnInit } from '@angular/core';

import { PushNotificationOptions, PushNotificationService } from 'ngx-push-notifications';
import { interval, Subscription } from 'rxjs';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-pushnotification',
  templateUrl: './pushnotification.component.html',
  styleUrls: ['./pushnotification.component.css']
})
export class PushnotificationComponent implements OnInit {

  constructor(private _pushNotificationService: PushNotificationService) { }

  ngOnInit() {
    const isGranted = this._pushNotificationService.isPermissionGranted;
  this._pushNotificationService.requestPermission();
   setInterval(()=>{
      this.myFunction();
    },2000000000000000000);
  }

  myFunction() {
    const title = 'Hello';
    const options = new PushNotificationOptions();
    options.body = 'Native Push Notification';
 
    this._pushNotificationService.create(title, options).subscribe((notif) => {
      if (notif.event.type === 'show') {
        console.log('onshow');
        setTimeout(() => {
          notif.notification.close();
        }, 3000);
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
}
