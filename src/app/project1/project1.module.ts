import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProChildComponent } from './pro-child/pro-child.component';
import { Project1Component } from './project1.component';
import { ProChild2Component } from './pro-child/pro-child2/pro-child2.component';





@NgModule({
  declarations: [
    ProChildComponent,
    Project1Component,
    ProChild2Component
  ],
  imports: [
    CommonModule
  ],
  exports:[Project1Component]
})
export class Project1Module { }
