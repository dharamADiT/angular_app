import { Component } from '@angular/core';
import { UtilsService } from 'src/app/appServices/utils.service';
import { Product } from '../card1/card1.component';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss'],
})
export class Card2Component {
  constructor(private _utilService: UtilsService) {}
 product:any=""
  ngOnInit(){
        this.product=this._utilService.product.name;

  }
  btnclick() {
    this._utilService.alertmsg();
  }
}
