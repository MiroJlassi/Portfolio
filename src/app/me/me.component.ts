import { Component, OnInit } from '@angular/core';
import { ThemeManagerService } from "../../app/app_services/theme-manager.service";
import { LinkManagerService } from "../../app/app_services/link-manager.service"; 

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrl: './me.component.css'
})
export class MeComponent implements OnInit{
  currentTheme = '';

  links: any;
  constructor(private themeService: ThemeManagerService, private linkManager: LinkManagerService) {
    this.links = linkManager.getLinks();
  }
  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }
}
