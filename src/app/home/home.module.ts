import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { HomeComponent } from './home.component';
import { ProductModule } from '../product/product.module';
import { LoginComponent } from '../login/login.component';





@NgModule({
  declarations: [HomeComponent, Card1Component,Card2Component,LoginComponent
    
 
  ],
  imports: [
    CommonModule,ProductModule
  ]
})
export class HomeModule { }

