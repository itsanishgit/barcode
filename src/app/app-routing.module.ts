import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarCodeStreamComponent } from './components/bar-code-stream/bar-code-stream.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/home",
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
