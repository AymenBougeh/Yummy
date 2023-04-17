import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ShopComponent } from './shop/shop.component';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { FooterComponent } from './footer/footer.component';
import { DisplayFoodComponent } from './display-food/display-food.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'order', component: OrderComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OrderComponent,
    ShopComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    ShopComponent,
    MenuComponent,
    AdminComponent,
    ClientComponent,
    FooterComponent,
    DisplayFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
