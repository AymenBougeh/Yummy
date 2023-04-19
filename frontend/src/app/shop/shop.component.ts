import { Component } from '@angular/core';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  cart: any[] = [];
  totalPrice: number = 0;

   onFoodAdded(food: any) {
    this.cart.push(food);
    this.totalPrice += food.price;
  }
  

}
