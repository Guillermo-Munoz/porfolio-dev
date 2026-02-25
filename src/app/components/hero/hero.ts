import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-hero',
  
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class Hero {
  
  scrollToProjects(): void {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  downloadCV(): void {
    const cvUrl = './doc/CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV.pdf';
    link.click();
  }
}