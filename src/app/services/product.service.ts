import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = "https://dummyjson.com/products";
  apiCategories: string = "https://dummyjson.com/products/category-list";
  apiCategory: string ="https://dummyjson.com/products/category/";

  products: any[] = [
    { id: 1, code: "3214", name: "Coca Cola", price: 100, quantity: 20, discount: false, description: "Coca Cola je odlicna", image: "https://www.1001spirits.com/tuotekuvat/1200x1200/Coca%20Cola%20Classic%2024x0%2C33%20l.png" },
    { id: 2, code: "3224", name: "Coca Cola Zero", price: 600, quantity: 15, discount: false, description: "Coca Cola je odlicna i jos je zero bas 0 secera ima kako kul", image: "https://shop.stridon.hr/wp-content/uploads/2023/03/Coca-Cola-zero-sugar-330mL.jpg" },
    { id: 3, code: "3114", name: "Sprite", price: 1500, quantity: 40, discount: false, description: "Ovo", image: "https://chamberswineandliquor.com/wp-content/uploads/2021/12/4913207.jpg" },
    { id: 4, code: "3211", name: "Pepsi", price: 3000, quantity: 4, discount: true, description: "Pepsi je bolji od kole", image: "https://www.knjaznatura.co.rs/files/watermark/files/files/thumbs_w/pepsi-BLUE-TITAN-0_33L-SRB_w_800_800px.jpg" }
  ];
  username: string = "";
  firstname: string = "";
  lastname: string = "";

  constructor(private http: HttpClient) { }

  getProductsByApi(){
    return this.http.get(this.apiUrl);
  }

  getProductById(id: number){
    return this.http.get(this.apiUrl + "/" + id);
  }

  getCategories(){
    return this.http.get(this.apiCategories);
  }
  getProductByCategory(cat: string){
    return this.http.get(this.apiCategory + cat);
  }

  getProducts() {
    return this.products;
  }

  getUsername(username: string) {
    this.username = username;
  }
  getFirstName(firstname: string) {
    this.firstname = firstname;
  }
  getLastName(lastname: string) {
    this.lastname = lastname;
  }
}
