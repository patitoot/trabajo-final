import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [RouterLink, RouterLinkActive, FormsModule],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {

  busqueda: string = '';
  mostrarOpciones: boolean = false;
  errorBusqueda: boolean = false;

  resultadosFiltrados: {
    titulo: string;
    categoria: string;
    ruta: string;
    palabras: string;
  }[] = [];

  resultados = [
    // PÁGINAS
    { titulo: 'Inicio', categoria: 'Página', ruta: '/', palabras: 'principal inicio' },
    { titulo: 'Nosotros', categoria: 'Página', ruta: '/nosotros', palabras: 'historia banda' },
    { titulo: 'Contacto', categoria: 'Página', ruta: '/contacto', palabras: 'mensaje formulario' },
    { titulo: 'Ayuda', categoria: 'Página', ruta: '/ayuda', palabras: 'soporte informacion' },
    { titulo: 'Canciones', categoria: 'Página', ruta: '/cancion', palabras: 'musica temas' },

    // INTEGRANTES
    { titulo: 'Gustavo Cerati', categoria: 'Integrante', ruta: '/nosotros', palabras: 'voz guitarra cantante solista' },
    { titulo: 'Zeta Bosio', categoria: 'Integrante', ruta: '/nosotros', palabras: 'bajo integrante' },
    { titulo: 'Charly Alberti', categoria: 'Integrante', ruta: '/nosotros', palabras: 'bateria integrante' },

    // CANCIONES
    { titulo: 'Hombre al agua', categoria: 'Canción', ruta: '/cancion', palabras: 'cancion animal' },
    { titulo: '¿Por qué no puedo ser del Jet-Set?', categoria: 'Canción', ruta: '/cancion', palabras: 'soda stereo primer disco' },
    { titulo: 'Lo que sangra (La cúpula)', categoria: 'Canción', ruta: '/cancion', palabras: 'doble vida' },
    { titulo: 'Primavera 0', categoria: 'Canción', ruta: '/cancion', palabras: 'dynamo' },
    { titulo: 'Signos', categoria: 'Canción', ruta: '/cancion', palabras: 'signos' },
    { titulo: 'De música ligera', categoria: 'Canción', ruta: '/cancion', palabras: 'cancion animal rock' },
    { titulo: 'Corazón delator', categoria: 'Canción', ruta: '/cancion', palabras: 'doble vida' },
    { titulo: 'Ella usó mi cabeza como un revólver', categoria: 'Canción', ruta: '/cancion', palabras: 'sueno stereo' },

    // ÁLBUMES DE SODA STEREO
    { titulo: 'Soda Stereo', categoria: 'Álbum', ruta: '/nosotros', palabras: 'primer disco 1984' },
    { titulo: 'Nada personal', categoria: 'Álbum', ruta: '/nosotros', palabras: '1985' },
    { titulo: 'Signos', categoria: 'Álbum', ruta: '/nosotros', palabras: '1986' },
    { titulo: 'Doble vida', categoria: 'Álbum', ruta: '/nosotros', palabras: '1988' },
    { titulo: 'Canción animal', categoria: 'Álbum', ruta: '/nosotros', palabras: '1990' },
    { titulo: 'Dynamo', categoria: 'Álbum', ruta: '/nosotros', palabras: '1992' },
    { titulo: 'Sueño Stereo', categoria: 'Álbum', ruta: '/nosotros', palabras: '1995' },

    // CARRERA SOLISTA DE CERATI
    { titulo: 'Amor Amarillo', categoria: 'Álbum solista', ruta: '/nosotros', palabras: 'gustavo cerati 1993' },
    { titulo: 'Bocanada', categoria: 'Álbum solista', ruta: '/nosotros', palabras: 'gustavo cerati 1999' },
    { titulo: 'Siempre es hoy', categoria: 'Álbum solista', ruta: '/nosotros', palabras: 'gustavo cerati 2002' },
    { titulo: 'Ahí vamos', categoria: 'Álbum solista', ruta: '/nosotros', palabras: 'gustavo cerati 2006' },
    { titulo: 'Fuerza natural', categoria: 'Álbum solista', ruta: '/nosotros', palabras: 'gustavo cerati 2009' },
    { titulo: 'Colores Santos', categoria: 'Álbum', ruta: '/nosotros', palabras: 'cerati daniel melero 1992' }
  ];

  constructor(private router: Router) {}

  normalizar(texto: string): string {
    return texto
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  actualizarResultados() {
    const texto = this.normalizar(this.busqueda);

    this.errorBusqueda = false;

    if (texto === '') {
      this.resultadosFiltrados = [];
      this.mostrarOpciones = false;
      return;
    }

    this.resultadosFiltrados = this.resultados.filter(resultado => {
      const contenido = this.normalizar(
        resultado.titulo + ' ' +
        resultado.categoria + ' ' +
        resultado.palabras
      );

      return contenido.includes(texto);
    });

    this.mostrarOpciones = true;
  }

  buscar() {
    if (this.resultadosFiltrados.length === 1) {
      this.seleccionarResultado(this.resultadosFiltrados[0]);
    } else if (this.resultadosFiltrados.length === 0) {
      this.errorBusqueda = true;
      this.mostrarOpciones = true;
    } else {
      this.mostrarOpciones = true;
    }
  }

  seleccionarResultado(resultado: {
    titulo: string;
    categoria: string;
    ruta: string;
    palabras: string;
  }) {
    this.router.navigateByUrl(resultado.ruta);

    this.busqueda = '';
    this.resultadosFiltrados = [];
    this.mostrarOpciones = false;
    this.errorBusqueda = false;
  }

  cerrarOpciones() {
    setTimeout(() => {
      this.mostrarOpciones = false;
    }, 150);
  }
}
