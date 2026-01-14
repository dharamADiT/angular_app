import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project1Component } from './project1.component';
import { Card2Component } from '../home/card2/card2.component';
import { Card1Component } from '../home/card1/card1.component';
import { ChildComponent } from '../parent/child/child.component';
import { ParentComponent } from '../parent/parent.component';
import { CardComponent } from '../card/card.component';
import { LeptopProductComponent } from '../product/leptop-product/leptop-product.component';
import { SingleProductComponent } from '../product/leptop-product/single-product/single-product.component';
import { ProductComponent } from '../product/product.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { CrudComponent } from '../crud/crud.component';
import { LoginComponent } from '../login/login.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    CrudComponent,
    PageNotFoundComponent,
    ProductComponent,
    SingleProductComponent,
    LeptopProductComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    Card1Component,
    Card2Component,
    Project1Component,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
  // exports: [Project1Component],
})
export class Project1Module {}
