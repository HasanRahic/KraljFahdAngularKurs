import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductModel } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

  title: string = "";
  price: number = 0;
  description: string = "";
  brand: string = "";

  constructor(private _productService: ProductService){}

  saveProduct(){
    var obj = {
      title: this.title,
      price: this.price,
      description: this.description,
      brand: this.brand
    } as ProductModel;
    var response = this._productService.addProduct(obj);
    console.log(response);
  }
}
