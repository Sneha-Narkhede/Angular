import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListWorksComponent } from './product-list-works/product-list-works.component';
import { ProductWorksComponent } from './product-works/product-works.component';


const routes: Routes = [
{
  path:'',
  redirectTo:'/list',
  pathMatch:'full'

},
{
  path:'list',
  component:ProductListWorksComponent
},
{
  path:'product',
  component:ProductWorksComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
