import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
     isCart:any
sPro: boolean = false
  selProduct: string = '';
  onbtnClick(value: string) {
    this.selProduct = value;  
    this.sPro= true
  }
  childfnc(childData:any){ 
this.isCart =childData 
  }
   checkOut(){
   alert(this.isCart + " confirm for checkout")
   }

}
