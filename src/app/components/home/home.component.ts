import { DatePipe, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe, FormsModule, NgFor, NgIf, NgClass, NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  today: any = new Date;
  productName: string = "Coca cola";
  selectedType: number=1;
  selectedTypeName: string = "";
  productTypeList: any[] = [
    {id:1, name:"Cokolada"},
    {id:2, name: "Pice"},
    {id:3, name: "Jelo"},
    {id:4, name: "Bombone"},
  ];


  ngOnInit(): void {
    this.promijenitProductType();
  }

  changeProductName(){
    console.log(this.productName);
  }


  promijeniVrijednost(){
    console.log(this.selectedType);
  }


  promijenitProductType(){
    for (let index = 0; index < this.productTypeList.length; index++) {
      if(this.selectedType==this.productTypeList[index].id){
        this.selectedTypeName = this.productTypeList[index].name;
      }
      
    }
  }

  nekiNaslov: string = "Neki naslov";
  promijeniTekst(){
    this.nekiNaslov = "Sad je drugi tekst";
  }

  someValue: string = "";

  
  nizValue: boolean = false;
  nizNekihImena: any[] =[
    {id:1, name:"Da li je bitno"},
    {id:2, name:"Daris"},
    {id:3, name:"Fortnite"},
    {id:4, name:"Hasan"},
    {id:5, name:"Angular"},
  ]
  promijeniVrijednostZaListu(){
    this.nizValue = !this.nizValue;
  }
  selectedId: number | null = null;

}
