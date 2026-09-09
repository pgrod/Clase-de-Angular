import {Component} from '@angular/core';
import {IAutor} from '../models/interface/IAutor';

@Component({
    selector: 'app-autor',
    imports: [],
    templateUrl: './autor.html',
    styleUrl: './autor.css'
})
export class Autor {
    autor: IAutor = {
        nombre: 'Rick Riordan',
        nacionalidad: 'Estadounidense'
    };
}