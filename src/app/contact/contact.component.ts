import { Component, OnInit } from '@angular/core';
import { ThemeManagerService } from "../../app/theme-manager.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  currentTheme = '';

  constructor(private themeService: ThemeManagerService) { }

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }
}
