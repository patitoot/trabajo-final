import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Canciones } from './pages/cancion/cancion';
import { Contacto } from './pages/contacto/contacto';
import { Nosotros } from './pages/nosotros/nosotros';
import { Ayuda } from './pages/ayuda/ayuda';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
 { path: '', component: Inicio }, // ruta raíz
 { path: 'cancion', component: Canciones },
 { path: 'contacto', component: Contacto },
 { path: 'nosotros', component: Nosotros},
 { path: 'ayuda', component: Ayuda},
 { path: '**', component: NotFound }, // catch-all: ruta 404
];