 import { Component, HostListener } from '@angular/core';
import { NgClass, } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass,],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  isScrolled = false;
  menuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  this.closeMenu(); // cierra el menú en móvil si está abierto
}
}