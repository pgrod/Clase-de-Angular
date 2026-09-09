import { Component } from '@angular/core';
import { ICategoria } from '../models/interface/ICategoria';

@Component({
  selector: 'app-categoria',
  imports: [],
  templateUrl: './categoria.html',
  styleUrl: './categoria.css'
})
export class Categoria {
    categoria: ICategoria = {
        nombre: 'Ficción'
    };
}