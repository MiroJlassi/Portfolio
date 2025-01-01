import { Component } from '@angular/core';
import { ThemeManagerService } from "../../app/theme-manager.service";

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent{
  currentTheme = 'dark';

  constructor(private themeService: ThemeManagerService) {
    this.themeService.currentTheme.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
  }
}
