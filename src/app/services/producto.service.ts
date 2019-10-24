import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterfaz } from '../interfaces/producto.interfaces';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  producto: ProductoInterfaz[] = [];
  cargando = true;

  constructor(private http:HttpClient) { 
    this.cargarProducto();
  }

  cargarProducto(){
    this.http.get('https://angular-html-958ee.firebaseio.com/productos_idx.json')
      .subscribe( (resp: ProductoInterfaz[]) => {
        this.cargando = false;
        this.producto = resp;
      } )
  }
}
