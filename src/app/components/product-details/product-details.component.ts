import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  productId: number = 0;
  products: any[] = [];
  selectedProduct: any;
  constructor(
    private route: ActivatedRoute, 
    private _productService : ProductService){}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get("id")?.toString());
    this.products = this._productService.getProducts();
    this.getProduct();
  }

  getProduct(){
    for (let i = 0; i < this.products.length; i++) {
      if(this.productId == this.products[i].id){
        this.selectedProduct = this.products[i];
      }
       
    }
  }
}
