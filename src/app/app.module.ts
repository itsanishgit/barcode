import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BarcodeScannerLivestreamModule } from 'ngx-barcode-scanner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarCodeStreamComponent } from './components/bar-code-stream/bar-code-stream.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BarCodeStreamComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarcodeScannerLivestreamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
