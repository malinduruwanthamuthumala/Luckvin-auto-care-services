import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 5.9768;
  lng: number = 80.7136;

  constructor() { }

  ngOnInit() {
  }

}
