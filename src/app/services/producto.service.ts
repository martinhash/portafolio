import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterfaz } from '../interfaces/producto.interfaces';
import { reject } from 'q';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  producto: ProductoInterfaz[] = [];
  productoFiltrado: ProductoInterfaz[] = [];
  cargando = true;

  constructor(private http:HttpClient) { 
    this.cargarProducto();
  }

  cargarProducto(){

    return new Promise(( resolve, reject ) => {
        this.http.get('https://angular-html-958ee.firebaseio.com/productos_idx.json')
      .subscribe( (resp: ProductoInterfaz[]) => {
        this.cargando = false;
        this.producto = resp;
        resolve();
      } )
    })
  }

  getProducto( id: String){
    return this.http.get(`https://angular-html-958ee.firebaseio.com/productos/${ id }.json`)
  }

  buscarProducto(termino: string){
    if( this.producto.length === 0 ){
      this.cargarProducto().then( () =>{
        this.filtrarProductos(termino)
      } )
    }else{
      this.filtrarProductos(termino)
    }
  }

  filtrarProductos(termino:string){
    this.productoFiltrado = [];
    termino = termino.toLocaleLowerCase();

    this.producto.forEach( prod =>{
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if(prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0){
        this.productoFiltrado.push(prod)
      }
    } )


  }
}
