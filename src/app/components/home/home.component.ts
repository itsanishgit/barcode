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
  allowedFormats = ['aztec', 'code_128', 'code_39', 'code_93', 'codabar', 'data_matrix', 'ean_13', 'ean_8', 'itf', 'pdf417', 'qr_code', 'upc_a', 'upc_e'];

  constructor(private cd: ChangeDetectorRef) {
    this.barcodeValue = [];
  }

  ngAfterViewInit(): void {
    this.barcodeScanner.start();
  }

  onValueChanges(result: any) {
    if (this.barcodeValue.length < 2) {
      this.barcodeValue.push(result.codeResult.code);
      if (this.barcodeValue.length == 1) {
        alert("Tilt the screen to scan again");
      }
      this.cd.detectChanges();
    }
  }

  onStarted(started: any) {
    console.log(started);
  }
}
