import { Injectable } from '@angular/core';
export interface Product {
  name: string;
  id: string;
}
@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }
   alertmsg(){
    alert("this by from depency through");
  }
 
  product: Product = {
    name: "ram",
    id:"002"
  };
}
