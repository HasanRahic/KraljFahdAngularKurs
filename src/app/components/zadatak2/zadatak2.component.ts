import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-zadatak2',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './zadatak2.component.html',
  styleUrl: './zadatak2.component.css'
})
export class Zadatak2Component implements OnInit{
  productName: string = "Coca cola";
  selectedType: number=1;
  selectedTypeName: string = "";
  productTypeList: any[] = [
    {id:1, name:"Cokolada"},
    {id:2, name: "Pice"},
    {id:3, name: "Jelo"},
    {id:4, name: "Bombone"},
  ];
  products: any[] = [
    { code: "3214", name: "Coca Cola", price: 100, quantity: 20, discount: false, description: "Coca Cola je odlicna", image: "https://www.1001spirits.com/tuotekuvat/1200x1200/Coca%20Cola%20Classic%2024x0%2C33%20l.png" },
    { code: "3224", name: "Coca Cola Zero", price: 600, quantity: 15, discount: false, description: "Coca Cola je odlicna i jos je zero bas 0 secera ima kako kul", image: "https://shop.stridon.hr/wp-content/uploads/2023/03/Coca-Cola-zero-sugar-330mL.jpg" },
    { code: "3114", name: "Sprite", price: 1500, quantity: 40, discount: false, description: "Ovo", image: "https://chamberswineandliquor.com/wp-content/uploads/2021/12/4913207.jpg" },
    { code: "3211", name: "Pepsi", price: 3000, quantity: 4, discount: true, description: "Pepsi je bolji od kole", image: "https://www.knjaznatura.co.rs/files/watermark/files/files/thumbs_w/pepsi-BLUE-TITAN-0_33L-SRB_w_800_800px.jpg" }
  ];

  ngOnInit(): void {
    this.promijenitProductType();
  }

  changeProductName(){
    console.log(this.productName);
  }


  promijeniVrijednost(){
    console.log(this.selectedType);
  }


  promijenitProductType(){
    for (let index = 0; index < this.productTypeList.length; index++) {
      if(this.selectedType==this.productTypeList[index].id){
        this.selectedTypeName = this.productTypeList[index].name;
      }
      
    }
  }
}
