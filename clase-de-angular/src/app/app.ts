import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Autor } from './autor/autor';
import { Categoria } from './categoria/categoria';
import { Libro } from './libro/libro';

@Component({
  imports: [Libro, Autor, Categoria],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('clase-de-angular');
}
