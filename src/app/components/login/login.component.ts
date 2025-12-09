import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ProductService } from '../../services/product.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
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
    this._productService.getUsername(this.username);
    this._productService.getFirstName(this.firstname);
    this._productService.getLastName(this.lastname);
  }  
}
