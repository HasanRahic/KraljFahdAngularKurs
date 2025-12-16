import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { NgForOf, NgIf } from "../../../../node_modules/@angular/common";
import { RouterLink } from "@angular/router";
import { NavbarIspitComponent } from "../navbar-ispit/navbar-ispit.component";

@Component({
  selector: 'app-lista-korisnika',
  standalone: true,
  imports: [NgForOf, NgIf, RouterLink, NavbarIspitComponent],
  templateUrl: './lista-korisnika.component.html',
  styleUrl: './lista-korisnika.component.css'
})
export class ListaKorisnikaComponent implements OnInit{
  korisnici: any[] = [];

  constructor(private userService: UserServiceService){}
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: any) =>{
      this.korisnici = data?.users;
    });
  }

}
