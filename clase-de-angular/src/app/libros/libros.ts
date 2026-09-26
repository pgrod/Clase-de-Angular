import { Component, OnInit } from '@angular/core';
import { ILibro } from '../models/interface/ILibro';
import { Libro } from '../libro/libro';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from '../services/libros';
import { ILibroApi } from '../models/interface/ILibroApi';

@Component({
  imports: [Libro],
  selector: 'app-libros',
  styleUrl: './libros.css',
  templateUrl: './libros.html',
})
export class Libros implements OnInit {

libros: ILibro[] = [];
librosFiltrados: ILibro[] = [];
librosApi: ILibroApi[] = [];

constructor(
  private route: ActivatedRoute,
  private librosService: LibrosService
) {}

ngOnInit(): void {

this.libros = this.librosService.libros;

  this.librosService.buscarLibros().subscribe(data => {
  this.librosApi = data.docs.slice(0, 10);
});

  this.route.queryParams.subscribe(params => {

    const id = Number(params['id']);

    if (id) {
      this.librosFiltrados = this.libros.filter(
        libro => libro.id === id
      );
    } else {
      this.librosFiltrados = this.libros;
    }

  });
}

}
