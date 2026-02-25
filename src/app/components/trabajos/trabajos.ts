import { AfterViewInit, Component } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-trabajos',
  imports: [],
  templateUrl: './trabajos.html',
  styleUrl: './trabajos.scss'
})
export class Trabajos implements AfterViewInit{



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


/**/////////////////////////////////////////////////////////////////////////////////////////////////////// */

  aProjects: Project[] = [

    {
    "id": 1,
    "title": "Arquitectura de Intranet y Gestión Documental",
    "description": "Desarrollo de un sistema de gestión de archivos empresarial sobre el núcleo de WP. Implementación de control de acceso por roles (RBAC), manipulación del sistema de archivos mediante PHP y subida recursiva de directorios con JavaScript asíncrono.",
    "image": "./img/intranet-gestor.webp",
    "url": "https://github.com/Guillermo-Munoz/intranet-wp.git",
    "techs": ["PHP Core", "Linux Filesystem", "Security Hooks", "JavaScript ES6"]
  },
  {
    "id": 2,
    "title": "Módulo de Optimización de Precios Dinámicos (PS 8/9)",
    "description": "Desarrollo de un módulo empresarial para la gestión de descuentos por volumen. Implementa un motor de consultas SQL optimizado para el esquema relacional de PrestaShop, persistencia en la API de configuración y un panel de administración avanzado con gestión de reglas de carrito en tiempo real.",
    "image": "./img/Diagrama.webp",
    "url": "https://github.com/Guillermo-Munoz/discounttable",
    "techs": ["PHP (OOP)", "SQL / PrestaShop DB", "Smarty Engine", "Hook Architecture", "Backoffice CRUD"]
  },
  {
    "id": 3,
    "title": "Middleware de Integración de Pagos (Santander)",
    "description": "Desarrollo de un módulo de pasarela de pagos bancaria. Gestión del ciclo de vida de la transacción: generación de firmas criptográficas HMAC, procesamiento de respuestas asíncronas (Webhooks) y trazabilidad de operaciones en MySQL.",
    "image": "./img/apartamentosNR.webp",
    "url": "https://github.com/Guillermo-Munoz/my-porfoliohtr",
    "techs": ["Criptografía HMAC", "API Rest", "MySQL", "Webhooks"]
  },
  {
    "id": 4,
    "title": "Infraestructura y Migración de Datos: OKmovil",
    "description": "Ingeniería de mantenimiento y migración de sistemas críticos para proveedor de telecomunicaciones. Optimización de esquemas de bases de datos MySQL, procesamiento de feeds XML externos y administración de entornos Apache.",
    "image": "./img/Okmovil.webp",
    "url": "https://okmovil.net/",
    "techs": ["Data Migration", "XML Parsing", "SQL Optimization", "Apache"]
  },
  {
    "id": 5,
    "title": "Ecosistema de Gestión de Contenidos a Medida",
    "description": "Implementación de una plataforma multisitio para el sector servicios. Desarrollo de temas 'headless' con lógica desacoplada en PHP, garantizando un rendimiento óptimo de base de datos y una arquitectura escalable.",
    "image": "./img/palsurfestival.webp",
    "url": "https://palsurfestival.com/",
    "techs": ["PHP Custom Logic", "Relational Databases", "Performance Tuning"]
  }
   
  ];
}

