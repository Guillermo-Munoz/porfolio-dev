import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Experience } from './components/experience/experience';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { ProjectsComponent } from './components/projects/projects';
import { Header } from './components/header/header';
import { Component, signal } from '@angular/core';
import { Trabajos } from './components/trabajos/trabajos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    Hero,
    About,
    ProjectsComponent,
    Experience,
    Contact,
    Footer,
    Trabajos
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('porfolio-dev');
}
