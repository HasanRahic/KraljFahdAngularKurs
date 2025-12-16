import { Component, numberAttribute, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { NgIf, NgForOf } from "../../../../node_modules/@angular/common";
import { NavbarIspitComponent } from "../navbar-ispit/navbar-ispit.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-detalji-korisnika',
  standalone: true,
  imports: [NgIf, NgForOf, NavbarIspitComponent, FormsModule],
  templateUrl: './detalji-korisnika.component.html',
  styleUrl: './detalji-korisnika.component.css'
})
export class DetaljiKorisnikaComponent implements OnInit{
  userId: number = 0;
  userList: any;
  cart: any;
  
  constructor(private route: ActivatedRoute, private userService: UserServiceService){}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id')?.toString());
    this.getUsers();
    this.userCart();
  }
  userCart() {
    this.userService.getUserCart(this.userId).subscribe((data: any) =>{
      this.cart = data?.carts;
      console.log(data.carts)
    })
  }

  getUsers(){
    this.userService.getUserById(this.userId).subscribe((data: any) => {
      this.userList = data;
    })
  }

}
