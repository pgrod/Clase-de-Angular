import { Component } from '@angular/core';
import { ILibro} from '../models/interface/ILibro';

@Component({
  selector: 'app-libro',
  imports: [],
  templateUrl: './libro.html',
  styleUrl: './libro.css',
})
export class Libro {
    libro: ILibro = {
        titulo:'Percy Jackson y el ladrón del rayo',
        descripcion:'Percy Jackson es un joven que descubre que es un semidiós, hijo de Poseidón, y se embarca en una peligrosa aventura para recuperar el rayo robado de Zeus y evitar una guerra entre los dioses del Olimpo.'
    };
}