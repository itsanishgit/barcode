import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
