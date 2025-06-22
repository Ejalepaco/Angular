import { Component } from '@angular/core';
import { Datum, Objeto, Villain } from '../../model/libro';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-libros',
  standalone: false,
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css',
})
export class LibrosComponent {
  libros?: Datum[];
  constructor(servicio: DataService) {
    servicio.getLibros().subscribe((response) => {
      this.libros = response.data;
    });
  }
}
