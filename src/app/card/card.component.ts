import { Component, OnInit, Input } from '@angular/core';
import { ThemeManagerService } from "../../app/theme-manager.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() link: string = '';
  @Input() linkText: string = '';

  currentTheme = '';

  constructor(private themeService: ThemeManagerService) { }

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }
}
