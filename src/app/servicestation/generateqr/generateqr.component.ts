import { Component, OnInit } from '@angular/core';
import 'jspdf';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
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
  downloadPdf() {
    let doc = new jsPDF();
    // doc.addHTML(document.getElementById("obrz"), function() {
    //    doc.save("obrz.pdf");
    // });
    html2canvas(document.getElementById('obrz')).then(function(canvas) {
      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      doc.addImage(img,'JPEG',5,20);
      doc.save('testCanvas.pdf');
      });
   
}
}
