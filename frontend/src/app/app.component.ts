import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    .bg-image {
      background-image: url('file:///C:/Users/Asus/Desktop/senior%20phase/yummy/src/assets/images/background.jpg');
      background-size: cover;
      background-position: center center;
      height: 100vh;
    }
  `]
})
export class AppComponent {
  title = 'yummy';
}
