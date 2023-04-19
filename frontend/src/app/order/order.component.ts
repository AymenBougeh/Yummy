import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() foods: any[] = [];
  @Output() foodAdded= new EventEmitter<any>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const url = 'http://localhost:5000/api/Foods/getAll';
    this.http.get<any[]>(url).subscribe((foods) => {
      this.foods = foods;
    });
  }

  getRatingStars(rating: number): string {
    let stars = '';
    for (let i = 0; i < rating; i++) {
      stars += '★';
    }
    return stars;
  }

  onFoodAdded(food: any) {
    this.foodAdded.emit(food);
    console.log("Added to cart:", food);
    
    
  }
}
