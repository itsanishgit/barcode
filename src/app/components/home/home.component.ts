import { AfterViewInit, ChangeDetectorRef, Component, HostListener, ViewChild } from '@angular/core';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner: any;
  barcodeValue: any;
  allowedFormats = ['code_128', 'code_39'];

  constructor(private cd: ChangeDetectorRef) {
    this.barcodeValue = [];
    let params = { audio: true, video: true };
    navigator.mediaDevices?.getUserMedia(params)
      .then((stream) => {
        stream.getTracks().forEach((track) => {
          console.log(track);
        });
      })
  }

  ngAfterViewInit(): void {
    // this.barcodeScanner.start();
  }

  onValueChanges(result: any) {
    if (this.barcodeValue.length < 2) {
      this.barcodeValue.push(result);
      if (this.barcodeValue.length == 1) {
        alert("Tilt the screen to scan again");
      }
      this.cd.detectChanges();
    }
  }

}
