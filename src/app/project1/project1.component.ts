
import { Component,ViewChild } from '@angular/core';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.scss']
})
export class Project1Component {
massage:string=""
DataOfParent:string=""
dataSend(val:any){
  console.log("click on button", val)
  this.DataOfParent = val.value

}
datatake(value:any){
this.massage= value
}
@ViewChild(FooterComponent) data!:FooterComponent;

callChild(){
  this.data.Magic()
}





}
