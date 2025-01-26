import { Component, OnInit } from '@angular/core';
import { ThemeManagerService } from "../../app/app_services/theme-manager.service";
import { LinkManagerService } from "../../app/app_services/link-manager.service"; 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
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
