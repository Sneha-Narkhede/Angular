import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-works',
  templateUrl: './product-works.component.html',
  styleUrls: ['./product-works.component.css']
})
export class ProductWorksComponent implements OnInit {

  constructor(private fbobj:FormBuilder ) {
    
  } 
  ProductForm = this.fbobj.group({
    productName:['',Validators.required,],
    productPrice:['',Validators.required]
  })
  ngOnInit() {
    
  }
  onSubmit(){
    console.log(this.ProductForm.value);
    
    
    console.log("submit");
    
  }


}
