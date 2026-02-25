import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class Hero implements AfterViewInit {

  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.heroVideo.nativeElement;
    video.muted = true;
    video.play().catch(err => {
      console.warn('Autoplay bloqueado:', err);
    });
  }

  scrollToProjects(): void {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = '/doc/CV.pdf';  // ruta absoluta como el video
    link.download = 'CV_Guillermo.pdf';
    document.body.appendChild(link); // necesario en Firefox
    link.click();
    document.body.removeChild(link); // limpieza
  }
}