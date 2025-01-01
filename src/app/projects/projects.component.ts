import { Component, OnInit } from '@angular/core';
import { ThemeManagerService } from "../../app/theme-manager.service";

import { Database, ref, onValue } from "@angular/fire/database";
import { Game } from "../../models/game";
import { Project } from "../../models/Project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  gameDetails: Game[] = [];
  projectDetails: Project[] = [];
  currentTheme = '';
  constructor(public dataBase: Database,
    private themeService: ThemeManagerService) {
    this.getProjectsFromFirebase();
  }

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }

  getProjectsFromFirebase() {
    const projectsRef = ref(this.dataBase, 'project');

    onValue(projectsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        Object.keys(data).forEach(key => {
          const projectData = data[key];

          if (projectData.ProjectCategoryu === "Game") {
            // Fill gameDetails array
            this.gameDetails.unshift(new Game(
              projectData.ProjectName,
              projectData.ProjectDescription,
              projectData.ProjectImageLink,
              projectData.ProjectLink
            ));
          } else {
            // Fill projectDetails array
            this.projectDetails.unshift(new Project(
              projectData.ProjectName,
              projectData.ProjectDescription,
              projectData.ProjectImageLink,
              projectData.ProjectLink,
            ));
          }
        });

        console.log("Game Details:", this.gameDetails);
        console.log("Project Details:", this.projectDetails);
      } else {
        console.log("No data available");
      }
    });
  }
}
