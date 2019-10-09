import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListWorksComponent } from './product-list-works/product-list-works.component';
import { ProductWorksComponent } from './product-works/product-works.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListWorksComponent,
    ProductWorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
