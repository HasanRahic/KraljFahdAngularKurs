import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgFor, NgIf],
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
    this.getProduct();
  }

  getProduct(){
    this._productService.getProductById(this.productId).subscribe((data) => {
      this.selectedProduct=data;
      console.log(data);
    });
  }
}
