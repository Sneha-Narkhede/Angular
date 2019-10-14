import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listOfProductArray=[]

  constructor() {}

  public addProduct(product){
    console.log(product);
    
    this.listOfProductArray.push(product)
    var arry= JSON.stringify(this.listOfProductArray)
    
    console.log("list of array"+arry);
    
  }

  public getProductList(){
   return this.listOfProductArray

  }
  
   
}
