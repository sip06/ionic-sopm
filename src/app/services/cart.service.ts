import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
    {
      category: 'SUV',
      expanded: true,
      suv: [
        { id: 0, name: 'SUBURBAN', price: '35' },
        { id: 1, name: 'Cu asigurare din bara in bara', price: '50' },
        { id: 2, name: 'Cu Asigurare RCA', price: '40' },
        { id: 3, name: 'Cu Asigurare Pasageri', price: '45' },
        { id: 4, name: '30 zile + RCA', price: '70' }
      ]
    },
    {
      category: 'Masina Mica',
      expanded: true,
      small: [
        { id: 5, name: 'Mercedes A200', price: '20' },
        { id: 6, name: 'Cu asigurare din bara in bara', price: '40' },
        { id: 7, name: 'Cu asigurare RCA', price: '30' },
        { id: 8, name: '30 zile + RCA', price: '50' }
      ]
    },
    {
      category: 'Masina de familie',
      expanded: true,
      family: [
        { id: 9, name: 'Mercedes E350', price: '45' },
        { id: 10, name: 'Cu asigurare din bara in bara', price: '90' },
        { id: 11, name: '30 zile + Asigurare', price: '40' }
      ]
    },
    {
      category: 'VAN',
      expanded: true,
      van: [
        { id: 12, name: 'Mercedes Sprinter', price: '40' },
        { id: 13, name: 'Cu asigurare din bara in bara', price: '60' },
        { id: 14, name: 'Cu asigurare marfa', price: '150' },
        { id: 15, name: 'Cu asistenta rutiera', price: '100' },
        { id: 16, name: '30 zile + Asig. + Asistenta', price: '80' }
      ]
    }
  ];

  private cart = [];

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  addProduct(product) {
    this.cart.push(product);
  }
}
