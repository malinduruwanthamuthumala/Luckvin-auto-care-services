import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-assistance',
  templateUrl: './vehicle-assistance.component.html',
  styleUrls: ['./vehicle-assistance.component.css']
})
export class VehicleAssistanceComponent implements OnInit {
  title: string = 'My first AGM project';
  public lat: number = 24.799448;
  public lng: number = 120.979021;

  public origin: any;
  public destination: any;
  constructor() { }

  ngOnInit() {
    this.getDirection();
  }


  getDirection() {
    console.log('fdfd');
    this.origin = { lat: 24.799448, lng: 120.979021 };
    this.destination = { lat: 24.799524, lng: 120.975017 };
   
    // this.origin = 'Taipei Main Station';
    // this.destination = 'Taiwan Presidential Office';
  }
}
