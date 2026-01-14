import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { CrudComponent } from './crud/crud.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { SingleProductComponent } from './product/leptop-product/single-product/single-product.component';
import { LeptopProductComponent } from './product/leptop-product/leptop-product.component';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { Card1Component } from './home/card1/card1.component';
import { Card2Component } from './home/card2/card2.component';
import { UtilsService } from './appServices/utils.service';

import { Project1Component } from './project1/project1.component';
import { Project1Module } from './project1/project1.module';





const appRoutes: Routes = [
  { path: "", redirectTo: 'login', pathMatch: 'full' },
  { path: "home", component: HomeComponent }, 
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "crud", component: CrudComponent },
  { path: "login", component: LoginComponent },
  { path: "buy-product", component:ParentComponent },
  { path: "single-product", component: SingleProductComponent },
  {path: "projects", component: Project1Component},
  {
    path: "products",  component: ProductComponent,
    children: [
      
      { path: "leptop", component: LeptopProductComponent}

    ]
  },
  { path: "**", component: PageNotFoundComponent },

]

@NgModule({
  declarations: [
    AppComponent,
   
 
   
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Project1Module,
    
    RouterModule.forRoot(appRoutes)


  ],
  providers: [UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

