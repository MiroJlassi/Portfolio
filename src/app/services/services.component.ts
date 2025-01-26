import { Component, OnInit } from '@angular/core';
import { ThemeManagerService } from "../../app/app_services/theme-manager.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit{
  currentTheme = '';
  constructor(private themeService: ThemeManagerService) { }
  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }
}
