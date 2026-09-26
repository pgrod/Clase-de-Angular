import { Service, inject } from '@angular/core';
import { ILibro } from '../models/interface/ILibro';
import { HttpClient } from '@angular/common/http';
import { IRespuestaLibros } from '../models/interface/ILibroApi';

@Service()
export class LibrosService {

    private http = inject(HttpClient);

  libros: ILibro[] = [
    {
      id: 1,
      titulo: 'Percy Jackson y el ladrón del rayo',
      descripcion: 'Primer libro de la saga Percy Jackson',
      paginas: 377
    },
    {
      id: 2,
      titulo: 'Harry Potter y la piedra filosofal',
      descripcion: 'Primer libro de la saga Harry Potter',
      paginas: 309
    },
    {
      id: 3,
      titulo: 'Los juegos del hambre',
      descripcion: 'Primer libro de la trilogía Los juegos del hambre',
      paginas: 374
    }
  ];
  
buscarLibros() {
  return this.http.get<IRespuestaLibros>(
    'https://openlibrary.org/search.json?q=harry+potter'
  );
}

}
