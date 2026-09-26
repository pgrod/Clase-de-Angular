import { Component, Input } from '@angular/core';
import { ILibro } from '../models/interface/ILibro';

@Component({
  selector: 'app-libro',
  imports: [],
  templateUrl: './libro.html',
  styleUrl: './libro.css',
})
export class Libro {

  @Input() libro!: ILibro;

}