import { Component, OnInit } from '@angular/core';
import { ThemeManagerService } from "../../app/app_services/theme-manager.service";

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrl: './me.component.css'
})
export class MeComponent implements OnInit{
  currentTheme = '';

  constructor(private themeService: ThemeManagerService) { }

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }
}
