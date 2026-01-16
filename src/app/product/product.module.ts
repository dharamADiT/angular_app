import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { LeptopProductComponent } from './leptop-product/leptop-product.component';
import { SingleProductComponent } from './leptop-product/single-product/single-product.component';
import { Project1Module } from '../project1/project1.module';

const productRoutes:Routes=[
  {
    path:'', component:ProductComponent,
    children:[
      {path:'leptop',component:LeptopProductComponent ,children:[
        {path:'single-product',component:SingleProductComponent}
      ]}
    ]
  }
]

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes)
  ]
})
export class ProductModule { }

