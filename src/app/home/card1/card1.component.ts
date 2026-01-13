import { Component } from '@angular/core';
import { MassageService } from 'src/app/appServices/massage.service';
import { UtilsService } from 'src/app/appServices/utils.service';

export interface Product {
  name: string;
  id: string;
}
@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss'],
})
export class Card1Component {
  constructor(private _utilService: UtilsService) {}
  product:any=""
  ngOnInit(){
    this.product=this._utilService.product.name
  }
  btnclick() {

    this._utilService.alertmsg();
  }
}
