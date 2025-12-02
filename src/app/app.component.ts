import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router, RouterLinkActive } from '@angular/router';
import { ZadatakComponent } from './components/zadatak/zadatak.component';
import { Zadatak2Component } from "./components/zadatak2/zadatak2.component";
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ZadatakComponent, Zadatak2Component, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KraljFahdAngularKurs';
  isLoggedIn: boolean = true;
  constructor(private router: Router){}

  openProductsOrLogin(){
    if(this.isLoggedIn){
      this.router.navigate(["products"]);
    } else{
      this.router.navigate(["login"]);
    }
  }
}
