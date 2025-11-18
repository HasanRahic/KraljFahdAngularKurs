import { NgIf, NgForOf, NgClass, NgStyle, UpperCasePipe, LowerCasePipe, CurrencyPipe, DecimalPipe, DatePipe, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-zadatak',
  standalone: true,
  imports: [NgIf, NgForOf, NgClass, NgStyle, UpperCasePipe, LowerCasePipe, DecimalPipe, CurrencyPipe, DatePipe, SlicePipe],
  templateUrl: './zadatak.component.html',
  styleUrl: './zadatak.component.css'
})
export class ZadatakComponent {
  // loggedIn: boolean = false;
  // Ime: string = "";
  // Prezime: string = "";
  // Products: any = [];
  // dugme: number = 0;

  // logIn(){
  //   this.Ime="Daraa";
  //   this.Prezime="Turaa";
  //   this.loggedIn=!this.loggedIn;
  // }

  // AddProducts(){
  //   this.Products = [
  //     {
  //       code: "1234",
  //       name: "Kola",
  //       price: 20,
  //       informacija: "Popust"
  //     },
  //     {
  //       code: "1233",
  //       name: "Sprite",
  //       price: 10,
  //     },
  //     {
  //       code: "1232",
  //       name: "Pepsi",
  //       price: 15,
  //       informacija: "Popust"
  //     },
  //     {
  //       code: "1235",
  //       name: "Fanta",
  //       price: 30,
  //     },
  //   ]
  // }

  // klikniDugme(){
  //   this.dugme +=1;
  // }

  imagePath: string = "https://upload.wikimedia.org/wikipedia/commons/d/d7/Mostar_Old_Town_Panorama_2007.jpg";
  isDisabled: boolean = false;
  // products: any[] = [
  //   { code: "3214", name: "Coca Cola", price: 20, quantity: 20, discount: false, description: "Coca Cola je odlicna", image: "https://www.1001spirits.com/tuotekuvat/1200x1200/Coca%20Cola%20Classic%2024x0%2C33%20l.png" },
  //   { code: "3224", name: "Coca Cola Zero", price: 10, quantity: 15, discount: false, description: "Coca Cola je odlicna i jos je zero bas 0 secera ima kako kul", image: "https://shop.stridon.hr/wp-content/uploads/2023/03/Coca-Cola-zero-sugar-330mL.jpg" },
  //   { code: "3114", name: "Sprite", price: 15, quantity: 40, discount: false, description: "Ovo", image: "https://chamberswineandliquor.com/wp-content/uploads/2021/12/4913207.jpg" },
  //   { code: "3211", name: "Pepsi", price: 30, quantity: 4, discount: true, description: "Pepsi je bolji od kole", image: "https://www.knjaznatura.co.rs/files/watermark/files/files/thumbs_w/pepsi-BLUE-TITAN-0_33L-SRB_w_800_800px.jpg" },
  // ];
  nameColor: string = "blue";
  descriptionWidth: number = 100;
  
  promijeniDiscount(i: any) {
    i.discount = !i.discount;
  }
  
  
  today: any = new Date;
  productName: string ="";

  // onInput(event: any){
  //   // var type = event.target as HTMLInputElement;
  //   // this.productName = type.value;
  // }

  onInput(event: any){
    this.productName = event;
  }

  onKeyUp(){
    console.log("Enter pozvan");
  }

  onMouseEnter(event: any){
    console.log("Mis enter");
  }
  onDoubleClick(event: any){
    console.log("Double click");
  }
  onRightClick(event: any){
    console.log("Ovo je desni klik");
  }
  
  // ZADACI TRECI SUSRET
  someColor: boolean= false;
  MjenjajBoju(event: any){
    this.someColor = !this.someColor;
  }

  products: any[] = [
    { code: "3214", name: "Coca Cola", price: 100, quantity: 20, discount: false, description: "Coca Cola je odlicna", image: "https://www.1001spirits.com/tuotekuvat/1200x1200/Coca%20Cola%20Classic%2024x0%2C33%20l.png" },
    { code: "3224", name: "Coca Cola Zero", price: 600, quantity: 15, discount: false, description: "Coca Cola je odlicna i jos je zero bas 0 secera ima kako kul", image: "https://shop.stridon.hr/wp-content/uploads/2023/03/Coca-Cola-zero-sugar-330mL.jpg" },
    { code: "3114", name: "Sprite", price: 1500, quantity: 40, discount: false, description: "Ovo", image: "https://chamberswineandliquor.com/wp-content/uploads/2021/12/4913207.jpg" },
    { code: "3211", name: "Pepsi", price: 3000, quantity: 4, discount: true, description: "Pepsi je bolji od kole", image: "https://www.knjaznatura.co.rs/files/watermark/files/files/thumbs_w/pepsi-BLUE-TITAN-0_33L-SRB_w_800_800px.jpg" },
  ];

  vrijednost: number = 0;
  saberi(n: any, m: any){
    this.vrijednost = parseFloat(n) + parseFloat(m);
  }
}
