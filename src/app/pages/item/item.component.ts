import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { ProductoDescripcionInterfaz } from 'src/app/interfaces/producto-desripcion.interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  productoID: string;
  producto: ProductoDescripcionInterfaz[] = [];
  anio = new Date().getFullYear();
  constructor(private route: ActivatedRoute,
              public productoService: ProductoService) { }

  ngOnInit() {
    this.route.params
      .subscribe(parametros => {

        this.productoService.getProducto(parametros['id_producto'])
          .subscribe( (producto: ProductoDescripcionInterfaz[]) => {
            this.productoID = parametros['id_producto'];
            this.producto = producto;
          } )
          
      })
  }

}
