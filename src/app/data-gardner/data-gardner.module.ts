import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndianClientComponent } from './indian-client/indian-client.component';
import { UkClientComponent } from './uk-client/uk-client.component';
import { RouterModule, Routes } from '@angular/router';
import { DataGardnerComponent } from './data-gardner.component';

const dgRoutes:Routes=[
  {path:'dg',component:DataGardnerComponent}
]


@NgModule({
  declarations: [IndianClientComponent,UkClientComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dgRoutes)
  ]
})
export class DataGardnerModule { }
