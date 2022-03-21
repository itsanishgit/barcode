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
  allowedFormats = ['code_128', 'code_39', 'code_93', 'codabar', 'ean_8', 'upc_e'];

  constructor(private cd: ChangeDetectorRef) {
    this.barcodeValue = [];
  }

  ngAfterViewInit(): void {
    this.barcodeScanner.start();
  }

  onValueChanges(result: any) {
    console.log(result);
    if (this.barcodeValue.length < 2) {
      this.barcodeValue.push(result);
      if (this.barcodeValue.length == 1) {
        alert("Tilt the screen to scan again");
      }
      this.cd.detectChanges();
    }
  }
}
