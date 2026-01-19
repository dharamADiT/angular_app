import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { DataGardnerComponent } from './data-gardner.component';
import { IndianClientComponent } from '../indian-client/indian-client.component';
import { UkClientComponent } from '../uk-client/uk-client.component';
import { FormsModule } from '@angular/forms';

const dgRoutes:Routes=[
  {path:'',component:DataGardnerComponent,children:[
     {path:'indian',component:IndianClientComponent},
   {path:'uk-client',component:UkClientComponent},
  ]}
]


@NgModule({
  declarations: [DataGardnerComponent,IndianClientComponent,UkClientComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(dgRoutes)
  ]
})
export class DataGardnerModule { }
