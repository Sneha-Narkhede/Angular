import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list-works',
  templateUrl: './product-list-works.component.html',
  styleUrls: ['./product-list-works.component.css']
})
export class ProductListWorksComponent implements OnInit {
  list:any=[];
  product: any;
  constructor(private prodService:ProductService) { }

  ngOnInit() {
 this.list= this.prodService.getProductList()
 console.log(this.prodService.getProductList());
 
    }

}
