import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';


import Work1 from './assets/proyecto1.jpeg';
import Work2 from './assets/proyecto2.jpeg';
import Work3 from './assets/proyecto3.jpeg';
import Work4 from './assets/proyecto4.jpeg';
import Work5 from './assets/proyecto5.jpg';
import Work6 from './assets/proximamente.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Inicio',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'Acerca',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portafolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contacto',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'Nombre : ',
    description: 'Jeremy',
  },

  {
    id: 2,
    title: 'Apellido: ',
    description: 'Benitez',
  },

  {
    id: 3,
    title: 'Edad : ',
    description: '23 años',
  },

  {
    id: 4,
    title: 'Nacionalidad: ',
    description: 'Venezolano',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Disponible',
  },

  {
    id: 6,
    title: 'Dirección : ',
    description: 'caracas-venezuela',
  },

  {
    id: 7,
    title: 'Teléfono : ',
    description: '+58 4242646005',
  },

  {
    id: 8,
    title: 'Correo Electronico : ',
    description: 'Jerebautista2001@gmail.com',
  },

 

  {
    id: 10,
    title: 'Lenguajes : ',
    description: 'Español, Ingles',
  },
];

export const stats = [
  {
    id: 1,
    no: '3',
    title: 'Años de <br /> Experiencia',
  },

  {
    id: 2,
    no: '+5',
    title: 'Proyectos<br />Completados',
  },

  {
    id: 3,
    no: '+5',
    title: 'Clientes <br /> Satisfechos',
  },


];

export const resume = [


  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - 2023',
    title: 'Desarrolador <span> web </span>',
    desc: 'Fundacion Bolivariana de informatica y telemática (Fundabit)'
    
  },
 
  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018 - 2023',
    title: 'Ingeniería en informatica',
    desc: 'Universidad Nacional Experimental de la gran caracas (UNEXCAS)',
  },

  {
    id: 2,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'cursando',
    title: 'ingles',
    desc: 'Curso en la escuela de idiomas modernos (Fundeim)',
  },


];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '100',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '40',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '50',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '50',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '30',
  },

  {
    id: 7,
    title: 'Angular',
    percentage: '60',
  },

  {
    id: 8,
    title: 'React',
    percentage: '60',
  },
  {
    id: 9,
    title: 'Documentación',
    percentage: '50',
  },
  {
    id: 10,
    title: 'Diseño web',
    percentage: '70',
  },
  {
    id: 11,
    title: 'PostgreSQL',
    percentage: '50',
  },
  {
    id: 12,
    title: 'Python',
    percentage: '40',
  }

];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Sistema de Participación electoral',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto  ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Cliente : ',
        desc: 'MPPE',
      },
      {
        icon: <FaCode />,
        title: 'lenguaje : ',
        desc: 'JavaScript'
      },
      {
        icon: <FiExternalLink />,
        title: 'Enlace : ',
        desc: 'http://participacionelectoral.fundabit.gob.ve/login.php',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Portal web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Cliente : ',
        desc: 'MPPE',
      },
      {
        
        icon: <FaCode />,
        title: 'Lenguaje : ',
        desc: 'Javascript', 
      },
      {
        icon: <FiExternalLink />,
        title: 'Enlace : ',
        desc: 'https://museosbolivarianos.mincyt.gob.ve',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Pagina web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto : ',
        desc: 'Pagina web', 
      },
      {
        icon: <FiUser />,
        title: 'Cliente : ',
        desc: 'UNEXCA',
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje : ',
        desc: 'Javascript',
      },
      
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Personal',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto : ',
        desc: 'Todoo list',
      },
      {
        icon: <FiUser />,
        title: 'Cliente : ',
        desc: 'personal',
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje : ',
        desc: 'React, Javascript',
      },
     
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Proyecto : ',
        desc: 'Website',
      },
      {
        title: 'Cliente : ',
        desc: 'Unexca',
      },
      {
        title: 'Lenguaje : ',
        desc: 'Javascript, PHP',
      },
    
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Proximamente',
    details: [
      {
        icon: <FiFileText />,
        title: ' : ',
        desc: '',
      },
      {
        icon: <FiUser />,
        title: '  ',
        desc: '',
      },
      {
        icon: <FaCode />,
        title: '  ',
        desc: '',
      },
     
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
