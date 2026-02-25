import { AfterViewInit, Component } from '@angular/core';
import { ExperienceModel} from '../../models/experiences.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss'],
  
})
export class Experience implements AfterViewInit{

 ngAfterViewInit(): void {
  const cards = document.querySelectorAll<HTMLElement>('.experience-card');

  cards.forEach(card => {
    let mouseX = 50, mouseY = 50;   
    let targetX = 50, targetY = 50; 

    const update = () => {
      
      mouseX += (targetX - mouseX) * 0.01; 
      mouseY += (targetY - mouseY) * 0.01;

      card.style.setProperty('--x', `${mouseX}%`);
      card.style.setProperty('--y', `${mouseY}%`);

      requestAnimationFrame(update);
    };

    card.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width) * 100;
      targetY = ((e.clientY - rect.top) / rect.height) * 100;
    });

    card.addEventListener('mouseleave', () => {
      targetX = 50;
      targetY = 50;
    });

    update(); 
  });
}


/*/////////////////////////////////////////////////////////////////////////////////////////////////////// */
/*////                           ARAY QUE CONTIENE LOS DATOS DE EXPERIENCIA                         //// */
/*////////////////////////////////////////////////////////////////////////////////////////////////////// */

 exp1: ExperienceModel = {
    puesto: "Programador Backend",
    empresa: "A4 Informática",
    fecha: "09/2024 – Actualidad",
    ubicacion: "Cádiz",
    responsabilidades: [
      "Diseño y desarrollo de lógica de negocio robusta utilizando Java y PHP (Laravel), bajo arquitectura orientada a objetos (OOP) y principios SOLID.",
      "Optimización de persistencia de datos en MySQL mediante el diseño de esquemas relacionales escalables y la mejora de rendimiento en consultas complejas.",
      "Implementación de arquitecturas API REST y orquestación de servicios para la integración segura de pasarelas de pago y sistemas externos.",
      "Gestión de infraestructura y seguridad web (Cloudflare, SSL/TLS), garantizando la integridad de los datos y la resolución proactiva de cuellos de botella técnicos."
    ]
  };

  exp2: ExperienceModel = {
    puesto: "Sistemas y Software Industrial (PLC/Embedded)",
    empresa: "Clibarca",
    fecha: "05/2015 – 08/2023",
    ubicacion: "Cádiz",
    responsabilidades: [
      "Desarrollo de software embebido y algoritmos de control lógico, optimizando procesos críticos de automatización industrial.",
      "Diseño y despliegue de sistemas automatizados basados en lógica de PLCs, reduciendo la tasa de error mediante la depuración y optimización de flujos de trabajo.",
      "Administración de infraestructura de red y servicios de servidor, asegurando la continuidad operativa y la alta disponibilidad de los sistemas.",
      "Liderazgo técnico en proyectos complejos, coordinando la integración entre hardware industrial y software de gestión."
    ]
  };

  exp3: ExperienceModel = {
    puesto: "Desarrollador de Hardware & Sistemas Freelance",
    empresa: "Proyectos por cuenta propia",
    fecha: "02/2011 – 04/2015",
    ubicacion: "Cádiz",
    responsabilidades: [
      "Ingeniería de diseño y programación de microcontroladores y circuitos electrónicos para la automatización de procesos a medida.",
      "Diagnóstico avanzado y resolución de incidencias en infraestructuras críticas de datos y redes eléctricas industriales.",
      "Desarrollo de soluciones de automatización orientadas a la eficiencia energética y el control de procesos en naves industriales."
    ]
  };

  exp4: ExperienceModel = {
    puesto: "Técnico en Infraestructura Crítica y Energía",
    empresa: "Esinor / Fdez. Chamizo(Repsol)",
    fecha: "06/2007 – 01/2011",
    ubicacion: "Andalucía",
    responsabilidades: [
      "Gestión de despliegues técnicos masivos, incluyendo la infraestructura de red y sistemas de alimentación ininterrumpida (SAI) en edificios corporativos.",
      "Supervisión y coordinación de equipos multidisciplinares (hasta 15 personas), gestionando plazos de entrega y cumplimiento de normativas técnicas.",
      "Especialista en entornos de alta seguridad (ATEX) y centros de transformación, aplicando protocolos de diagnóstico en sistemas de alta potencia."
    ]
  };

  exp5: ExperienceModel = {
    puesto: "Técnico Electrónico (Hardware & Firmware)",
    empresa: "Video Color Jerez",
    fecha: "03/2006 – 06/2006",
    ubicacion: "Cádiz",
    responsabilidades: [
      "Análisis y reparación de circuitos a nivel de componente y reprogramación de memorias no volátiles (firmware).",
      "Configuración y securización de infraestructuras de red inalámbricas y despliegue de entornos de sistemas operativos."
    ]
  };

  aExperiences: Array<ExperienceModel> = [
    this.exp1, this.exp2, this.exp3, this.exp4, this.exp5, 
  ];
}
