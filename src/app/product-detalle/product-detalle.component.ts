import { Product, productsList } from './../products/product.dock';
import { CurrencyPipe, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detalle',
  standalone: true,
  imports: [NgStyle,CurrencyPipe,NgIf],
  templateUrl: './product-detalle.component.html',
  styleUrl: './product-detalle.component.css'
})
export class ProductDetalleComponent implements OnInit {

  producto?:Product;
  productsList: Product[] = productsList
  loading: boolean = true;

  constructor(private _route: ActivatedRoute) { }
    ngOnInit(): void {
      setTimeout(()=>{
        this._route.params.subscribe(params =>{
          this.producto = this.productsList.find(producto => producto.id == params['productoId']);
          this.loading = false;
      });
      },1500);

  }

}
