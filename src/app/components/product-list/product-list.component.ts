import { DecimalPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [DecimalPipe, NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any[] = [
    { code: "3214", name: "Coca Cola", price: 100, quantity: 20, discount: false, description: "Coca Cola je odlicna", image: "https://www.1001spirits.com/tuotekuvat/1200x1200/Coca%20Cola%20Classic%2024x0%2C33%20l.png" },
    { code: "3224", name: "Coca Cola Zero", price: 600, quantity: 15, discount: false, description: "Coca Cola je odlicna i jos je zero bas 0 secera ima kako kul", image: "https://shop.stridon.hr/wp-content/uploads/2023/03/Coca-Cola-zero-sugar-330mL.jpg" },
    { code: "3114", name: "Sprite", price: 1500, quantity: 40, discount: false, description: "Ovo", image: "https://chamberswineandliquor.com/wp-content/uploads/2021/12/4913207.jpg" },
    { code: "3211", name: "Pepsi", price: 3000, quantity: 4, discount: true, description: "Pepsi je bolji od kole", image: "https://www.knjaznatura.co.rs/files/watermark/files/files/thumbs_w/pepsi-BLUE-TITAN-0_33L-SRB_w_800_800px.jpg" }
  ];
}
