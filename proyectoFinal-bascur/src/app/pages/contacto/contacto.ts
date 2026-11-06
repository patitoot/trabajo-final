import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-contacto',
  styleUrl: './contacto.css',
  templateUrl: './contacto.html',
})
export class Contacto {
  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  enviarMensaje() {
    if (!this.nombre.trim() || !this.email.trim() || !this.mensaje.trim()) {
      alert('Por favor, completá todos los campos.');
      return;
    }

    alert('¡Gracias por comunicarte con nosotros!');
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
  }
}