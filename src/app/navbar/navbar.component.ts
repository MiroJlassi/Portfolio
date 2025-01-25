import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  isDropdownOpen: boolean = false;
  currentLanguage: string = "EN";
  constructor(private translation: TranslationService, private cdr: ChangeDetectorRef) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToElement(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.toggleMenu();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.translation.switchLanguage(language);
    this.toggleDropdown();
    this.cdr.detectChanges();
  }
}
