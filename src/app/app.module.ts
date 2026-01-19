import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilsService } from './appServices/utils.service';
import { Project1Module } from './project1/project1.module';
import { DataGardnerModule } from './data-gardner/data-gardner.module';
import { ProductModule } from './product/product.module';
import { HomeModule } from './home/home.module';
import { IndianClientComponent } from './indian-client/indian-client.component';
import { UkClientComponent } from './uk-client/uk-client.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, Project1Module, DataGardnerModule,ProductModule,HomeModule],
  providers: [UtilsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

