import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = "";
  firstname: string = "";
  lastname: string = "";

  constructor(
    private _productService: ProductService
  ){}

  login(){
    this._productService.setUsername(this.username);
  }

  firstName(){
    this._productService.setFirstName(this.firstname);
  }

  lastName(){
    this._productService.setFirstName(this.lastname);
  }

  
}
