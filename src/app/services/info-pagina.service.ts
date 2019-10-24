import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoEquipo } from '../interfaces/info.pagina.interfaces';
@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  equipo: InfoEquipo[] = [];
  cargada = false;

  constructor(private http: HttpClient) { 
    this.cargarEquipo();
  }


  private cargarEquipo(){
    this.http.get('https://angular-html-958ee.firebaseio.com/equipo.json')
    .subscribe((resp: InfoEquipo[]) => {
       this.equipo = resp;
     } )
  }
}
