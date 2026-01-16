import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CrudComponent } from './crud/crud.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { SingleProductComponent } from './product/leptop-product/single-product/single-product.component';
import { Project1Component } from './project1/project1.component';
import { DataGardnerComponent } from './data-gardner/data-gardner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'login', component: LoginComponent },
  {path:'product',loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)},
  { path: 'buy-product', component: ParentComponent },
  
  { path: 'projects', component: Project1Component },
  { path: 'dg', component: DataGardnerComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
