import { Component } from '@angular/core';
import { GameDetails } from "../app/ProjectManager/gameDetails"
import { ProjectDetails } from "../app/ProjectManager/projectDetails"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio2';

  gameDetails: GameDetails;
  projectDetails: ProjectDetails;

  constructor() {
    this.gameDetails = new GameDetails();
    this.projectDetails = new ProjectDetails();
  }
}
