import { Routes } from '@angular/router';
import { Libros } from './libros/libros';
import { Autor } from './autor/autor';
import { Categoria } from './categoria/categoria';

export const routes: Routes = [
  {
    path: 'libros',
    component: Libros
  },
  {
    path: 'autor',
    component: Autor
  },
  {
    path: 'categoria',
    component: Categoria
  }
];
