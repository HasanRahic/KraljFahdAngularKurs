import { NgIf, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-zadatak',
  standalone: true,
  imports: [NgIf, NgForOf],
  templateUrl: './zadatak.component.html',
  styleUrl: './zadatak.component.css'
})
export class ZadatakComponent {
  loggedIn: boolean = false;
  Ime: string = "";
  Prezime: string = "";
  Products: any = [];
  dugme: number = 0;

  logIn(){
    this.Ime="Daraa";
    this.Prezime="Turaa";
    this.loggedIn=!this.loggedIn;
  }

  AddProducts(){
    this.Products = [
      {
        code: "1234",
        name: "Kola",
        price: 20,
        informacija: "Popust"
      },
      {
        code: "1233",
        name: "Sprite",
        price: 10,
      },
      {
        code: "1232",
        name: "Pepsi",
        price: 15,
        informacija: "Popust"
      },
      {
        code: "1235",
        name: "Fanta",
        price: 30,
      },
    ]
  }

  klikniDugme(){
    this.dugme +=1;
  }
}
