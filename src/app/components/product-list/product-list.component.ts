import { DecimalPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ProductService } from '../../services/product.service';
import { FormsModule, NgForm, NgModel } from "@angular/forms";
import { ProductModel } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [DecimalPipe, NgFor, RouterLink, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products: ProductModel[] = [];
  categories: any[] = [];
  selectedCategory: string= "";

  constructor(private _productService: ProductService){}

  ngOnInit(): void {
    this._productService.getProductsByApi().subscribe((data: any) =>{
      this.products=data?.products;
    });
    this._productService.getCategories().subscribe((data: any) => {
      this.categories = data;
    })
  }

  changeCategory(){
    this._productService.getProductByCategory(this.selectedCategory).subscribe((data: any) => {
      this.products = data.products;
    })
  }
}
