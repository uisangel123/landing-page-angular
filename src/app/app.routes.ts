import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetalleComponent } from './product-detalle/product-detalle.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'productos', component: ProductsComponent},
  { path: 'productos/:productoId', component: ProductDetalleComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: '**', redirectTo: '',pathMatch: 'full' }
];
