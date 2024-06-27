import { Component } from '@angular/core';
import { productsList } from './product.dock';
import { CurrencyPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe,NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  productsList=productsList;

}
