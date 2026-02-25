import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Project } from '../../models/project.model';


@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  
})
export class ProjectsComponent implements AfterViewInit{



  ngAfterViewInit(): void {
    this.initMouseFollowEffect();
  }

  private initMouseFollowEffect(): void {
    const cards = document.querySelectorAll<HTMLElement>('.project-card');
    
    cards.forEach(card => {
      let currentX = 50, currentY = 50;
      let targetX = 50, targetY = 50;
      const smoothness = 0.1;
      let animationId: number;

      const updatePosition = () => {
        currentX += (targetX - currentX) * smoothness;
        currentY += (targetY - currentY) * smoothness;

        card.style.setProperty('--x', `${currentX}%`);
        card.style.setProperty('--y', `${currentY}%`);

        animationId = requestAnimationFrame(updatePosition);
      };

      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        targetX = ((e.clientX - rect.left) / rect.width) * 100;
        targetY = ((e.clientY - rect.top) / rect.height) * 100;
      };

      const handleMouseLeave = () => {
        targetX = 50;
        targetY = 50;
        
        setTimeout(() => {
          cancelAnimationFrame(animationId);
        }, 1000);
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
      
      updatePosition();
    });
  }

  openProject(url: string): void {
    window.open(url, '_blank');
  }

/*/////////////////////////////////////////////////////////////////////////////////////////////////////// */
/*////                           ARAY QUE CONTIENE LOS DATOS DE LOS PROYECTOS                       //// */
/*////////////////////////////////////////////////////////////////////////////////////////////////////// */

  aProjects: Project[] = [
  {
    "id": 1,
    "title": "Document Management Engine (Intranet)",
    "description": "Desarrollo de un sistema de gestión documental basado en RBAC (Control de Acceso Basado en Roles). Implementación de lógica de servidor para la manipulación de sistemas de archivos jerárquicos y gestión de flujos de datos mediante Filesystem API.",
    "image": "./img/intranet-gestor.webp",
    "url": "https://github.com/Guillermo-Munoz/intranet-wp.git",
    "techs": ["PHP", "REST API", "RBAC", "Filesystem Architecture"]
  },
  {
    "id": 2,
    "title": "Localiten Geo-Treasure",
    "description": "Backend de una plataforma de geolocalización. Implementación de persistencia con Prisma ORM sobre SQLite y sistema de autenticación centralizada mediante NextAuth con protocolos OAuth2.",
    "image": "./img/lokaliten.webp",
    "url": "https://github.com/Guillermo-Munoz/localiten.git",
    "techs": ["TypeScript", "Prisma ORM", "NextAuth", "SQLite", "API Design"]
  },
  {
    "id": 3,
    "title": "Spotify-YouTube API Integration",
    "description": "Servicio de automatización en Python para el procesamiento de metadatos musicales. Integración de múltiples APIs externas (Spotify/YouTube), gestión de sesiones de usuario y parsing de estructuras de datos JSON complejas.",
    "image": "./img/python-musica.webp",
    "url": "https://github.com/Guillermo-Munoz/Python_Musica",
    "techs": ["Python", "API Integration", "Spotipy", "yt-dlp", "Data Processing"]
  },
  {
    "id": 4,
    "title": "Invoicing AI Pipeline",
    "description": "Pipeline inteligente para la automatización de facturación. Desarrollo de servicios de extracción de datos mediante OCR y procesamiento de lenguaje natural (NLP) para la clasificación y validación automática de entidades contables.",
    "image": "./img/facturacion-ia.webp",
    "url": "https://github.com/Guillermo-Munoz/facturacion-ia",
    "techs": ["Python", "Machine Learning", "OCR", "Flask", "NLP", "Pandas"]
  },
  {
    "id": 5,
    "title": "E-commerce Core (HuertaOnline)",
    "description": "Arquitectura de backend para comercio electrónico desarrollada en Laravel. Diseño de esquemas de base de datos relacionales y gestión de modelos de datos complejos mediante Eloquent ORM bajo el patrón MVC.",
    "image": "./img/huertaonline.webp",
    "url": "https://github.com/Guillermo-Munoz/HUERTAONLINE",
    "techs": ["Laravel", "PHP", "Eloquent ORM", "MySQL", "Software Architecture"]
  },
  {
    "id": 6,
    "title": "Multistep Business Logic API",
    "description": "Implementación de lógica de negocio transaccional para la captura de leads. Integración de servicios mediante WP REST API para el procesamiento y almacenamiento de datos persistentes personalizados.",
    "image": "./img/form-multistep.webp",
    "url": "https://github.com/Guillermo-Munoz/Formulario-Multistep",
    "techs": ["PHP", "API REST", "Backend Logic", "JSON Handling"]
  },
  {
    "id": 7,
    "title": "TPV Enterprise Logic",
    "description": "Desarrollo de lógica transaccional para puntos de venta bajo arquitectura en capas. Implementación de persistencia avanzada con JDBC, gestión de concurrencia y optimización de consultas en entornos Java 21.",
    "image": "./img/tpv.webp",
    "url": "https://github.com/Guillermo-Munoz/TPV-Free",
    "techs": ["Java 21", "MySQL", "JDBC", "Design Patterns", "Maven"]
  }
];
}