import { CartService } from './../../services/cart.service';
import { NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {

  userEmail: string;

  cart = [];
  items = [];
  cartItemCount: BehaviorSubject<number>;

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 25,
    centeredSlides: true
  };

  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private cartService: CartService,
    private router: Router
  ) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.userEmail = res.email;
      } else {
        this.navCtrl.navigateBack('');
      }
    }, err => {
      console.log('err', err);
    });
  }

  addToCart(items) {
    this.cartService.addProduct(items);
  }

  openCart() {
    this.router.navigate(['cart']);
  }

  openMenu() {
    this.router.navigate(['menu']);
  }
}
