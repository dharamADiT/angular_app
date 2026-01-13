import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() selectPro: boolean = false;
  @Output() isCart= new EventEmitter<any>();

  @Input() selectedProduct: string = '';


 addToCard() {
    this.isCart.emit(this.selectedProduct);
    console.log("added to Add to cart")
  }

   



}
