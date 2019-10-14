import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-works',
  templateUrl: './product-works.component.html',
  styleUrls: ['./product-works.component.css']
})
export class ProductWorksComponent implements OnInit {

  constructor(private fbobj:FormBuilder, private prodService:ProductService, private router:Router) {
    
  } 
  ProductForm = this.fbobj.group({
    productName:['',Validators.required,],
    productPrice:['',Validators.required]
  })
  ngOnInit() {
    
  }
  onSubmit(){
    this.prodService.addProduct(this.ProductForm.value)
    //console.log(this.prodService);
    
  
  }


}
