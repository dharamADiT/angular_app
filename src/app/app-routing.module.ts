import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CrudComponent } from './crud/crud.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { Project1Component } from './project1/project1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndianClientComponent } from './indian-client/indian-client.component';
import { UkClientComponent } from './uk-client/uk-client.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'login', component: LoginComponent },
  {path:'dg',loadChildren:()=>import('./data-gardner/data-gardner.module').then(m=>m.DataGardnerModule)},
  {path:'product',loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)},
  { path: 'buy-product', component: ParentComponent },
 
  
  { path: 'projects', component: Project1Component },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
