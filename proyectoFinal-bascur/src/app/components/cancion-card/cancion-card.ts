import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cancion } from '../../models/cancion';

@Component({
  selector: 'app-cancion-card',
  imports: [],
  templateUrl: './cancion.card.html',
  styleUrl: './cancion.card.css',
})
export class CancionCard {

  @Input() cancion!: Cancion;

  @Output() favorita = new EventEmitter<number>();

  marcarFavorita() {
    this.favorita.emit(this.cancion.id);
  }
}