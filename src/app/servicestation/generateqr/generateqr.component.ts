import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generateqr',
  templateUrl: './generateqr.component.html',
  styleUrls: ['./generateqr.component.css']
})
export class GenerateqrComponent implements OnInit {
  public qrdata: string = null;
  constructor(
    
    
  ) {
    this.qrdata = 'Initial QR code data string'
   }

  ngOnInit() {
  }
  changeValue(newValue: string): void {
    this.qrdata = newValue;
  }
}
