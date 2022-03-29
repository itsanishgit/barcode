import { ChangeDetectorRef, Component } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  barcodeValue: any;
  allowedFormats = [ 
    BarcodeFormat.AZTEC,
    BarcodeFormat.CODABAR,
    BarcodeFormat.CODE_128,
    BarcodeFormat.CODE_39,
    BarcodeFormat.CODE_93,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.EAN_8,
    BarcodeFormat.ITF,
    BarcodeFormat.MAXICODE,
    BarcodeFormat.PDF_417,
    BarcodeFormat.QR_CODE,
    BarcodeFormat.UPC_A,
    BarcodeFormat.UPC_E,
    BarcodeFormat.UPC_EAN_EXTENSION
   ];

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
