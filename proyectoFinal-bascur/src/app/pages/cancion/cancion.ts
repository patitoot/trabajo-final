import { Component } from '@angular/core';
import { Cancion } from '../../models/cancion';

@Component({
  imports: [],
  selector: 'app-cancion',
  styleUrl: './cancion.css',
  templateUrl: './cancion.html',
})
export class Canciones {

  canciones: Cancion[] = [
    {
      id: 1,
      titulo: 'Hombre al agua',
      album: 'Canción animal',
      imagen: 'https://i.scdn.co/image/ab67616d0000b273c451ed28353639e79b4d97d9',
      youtube: 'https://www.youtube.com/watch?v=_TjJZpX7iLg&list=RD_TjJZpX7iLg&start_radio=1',
      spotify: 'https://open.spotify.com/intl-es/track/6PqMi24DPibrFj9Ioc4hKL'
    },
    {
      id: 2,
      titulo: '¿Por qué no puedo ser del Jet-Set?',
      album: 'Soda Stereo',
      imagen: 'https://i.scdn.co/image/ab67616d0000b273004a489e7f2ae90c1ce9700d',
      youtube: 'https://www.youtube.com/watch?v=gIcklTKJMTE&list=RDgIcklTKJMTE&start_radio=1',
      spotify: 'https://open.spotify.com/intl-es/track/2JD91cpdSGoNh9K50GmByg'
    },
    {
      id: 3,
      titulo: 'Lo que sangra (La cúpula)',
      album: 'Doble vida',
      imagen: 'https://i.scdn.co/image/ab67616d0000b27382cf3a9e2e2b6b1b3f994d38',
      youtube: 'https://www.youtube.com/watch?v=Y-RQQds52qs&list=RDY-RQQds52qs&start_radio=1',
      spotify: 'https://open.spotify.com/intl-es/track/1Ssg0m4YjM10XVTXlblIg0'
    },
    {
      id: 4,
      titulo: 'Primavera 0',
      album: 'Dynamo',
      imagen: 'https://i.scdn.co/image/ab67616d0000b273b755f1b1b4410d404fe21167',
      youtube: 'https://www.youtube.com/watch?v=0MjARG5cKRw&list=RD0MjARG5cKRw&start_radio=1',
      spotify: 'https://open.spotify.com/intl-es/track/2V4aobDkpJD7e36J8xPCL6'
    },
    {
      id: 5,
      titulo: 'Signos',
      album: 'Signos',
      imagen: 'https://i.scdn.co/image/ab67616d0000b2734a6f5598c41e77ae78cab725',
      youtube: 'https://www.youtube.com/watch?v=CEb99v79yRM&list=RDCEb99v79yRM&start_radio=1',
      spotify: 'https://open.spotify.com/intl-es/track/09L0jTQCVyvR07arr9Gn6u'
    },
    {
      id: 6,
      titulo: 'De música ligera',
      album: 'Canción animal',
      imagen: 'https://i.scdn.co/image/ab67616d0000b273c451ed28353639e79b4d97d9',
      youtube: 'https://www.youtube.com/watch?v=T_FkEw27XJ0&list=RDT_FkEw27XJ0&start_radio=1',
      spotify: 'https://open.spotify.com/intl-es/track/2lpIh6Gr6HYjg1CFBaucS5'
    },
    {
  id: 7,
  titulo: 'Corazón delator',
  album: 'Doble vida',
  imagen: 'https://i.scdn.co/image/ab67616d0000b27382cf3a9e2e2b6b1b3f994d38',
  youtube: 'https://www.youtube.com/watch?v=tX1nCmFUaVM&list=RDtX1nCmFUaVM&start_radio=1',
  spotify: 'https://open.spotify.com/intl-es/track/2zaZ81JI8KbYaL7210BB0U'
},
{
  id: 8,
  titulo: 'Ella usó mi cabeza como un revólver',
  album: 'Sueño Stereo',
  imagen: 'https://i.scdn.co/image/ab67616d0000b273b50bb73f2ef9047afa0644a4',
  youtube: 'https://www.youtube.com/watch?v=1zzzby2tAQM&list=RD1zzzby2tAQM&start_radio=1',
  spotify: 'https://open.spotify.com/intl-es/track/5RzXSxR7BUhEtpqh77lMbR'
}
  ];

}