import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  apiUser: string = "https://dummyjson.com/users";
  apiUserDetails: string = "https://dummyjson.com/users/";
  apiUserCart: string = "https://dummyjson.com/carts/user/";
  apiAddToCart: string = "https://dummyjson.com/carts/add";


  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.apiUser);
  }

  getUserById(id: number) {
    return this.http.get(this.apiUserDetails+id);
  }

  getUserCart(id: number){
    return this.http.get(this.apiUserCart + id);
  }

  addToCart(data: any){
    return this.http.post(this.apiAddToCart, data);
  }
}
