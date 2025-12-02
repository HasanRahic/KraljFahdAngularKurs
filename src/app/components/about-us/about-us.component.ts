import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  userList: any[] =[
    {id: 1, name: "Daris"},
    {id: 2, name: "Kenan"},
    {id: 3, name: "Aida"},
  ]
}
