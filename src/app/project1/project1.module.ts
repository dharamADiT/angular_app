import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project1Component } from './project1.component';

import { ChildComponent } from '../parent/child/child.component';
import { ParentComponent } from '../parent/parent.component';
import { CardComponent } from '../card/card.component';
import { LeptopProductComponent } from '../product/leptop-product/leptop-product.component';
import { SingleProductComponent } from '../product/leptop-product/single-product/single-product.component';

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { CrudComponent } from '../crud/crud.component';
import { LoginComponent } from '../login/login.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    LoginComponent,
    CrudComponent,
    PageNotFoundComponent,

    SingleProductComponent,
    LeptopProductComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    Project1Component,
 
  ],
  imports: [CommonModule,HomeModule],
  // exports: [Project1Component],
})
export class Project1Module {}
