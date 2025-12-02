import { DatePipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe, FormsModule, NgFor],
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
}
