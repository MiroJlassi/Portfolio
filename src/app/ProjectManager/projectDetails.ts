import { Project } from "../../models/Project";

export class ProjectDetails {
  Projects: Project[] = [];

  constructor() {
    this.Projects = [
      new Project(
        "Professional-Login-Page-Template - 2024",
        "A Professional Login Page Template featuring a detailed login interface, signup functionality, and secure password encryption, ready to be integrated into any project.",
        "https://github.com/MiroJlassi/Professional-Login-Page-Template/raw/main/FrontEnd/src/assets/register.png",
        "https://github.com/MiroJlassi/Professional-Login-Page-Template"
      ),
      new Project(
        "Web Project: Tunisian Red Crescent Comite Manouba - 2024",
        "The Tunisian Red Crescent Comite Manouba website is an academic project showcasing fundamental HTML, CSS, JS, and PHP skills. Designed to support and unite aid efforts for Palestinians, this platform serves as a hub for gathering assistance.",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-5b93c.appspot.com/o/PROJECTS%2Fprojetweb1.png?alt=media&token=e3b64214-97af-4378-97e5-b3b5bc44e0d3",
        "https://github.com/MiroJlassi/Web-Project"
      ),
      new Project(
        "ENSI 40th ANNIVERSARY Website - 2024",
        "The ENSI 40th Anniversary website is a collaborative effort with the ENSI administration to commemorate this significant milestone. Join us as we celebrate four decades of excellence in education and innovation. Explore our journey, achievements, and the bright future ahead on this special platform.",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-5b93c.appspot.com/o/PROJECTS%2Flogo%20color.png?alt=media&token=a5fb6b38-816f-4882-bf8c-ade3ced9bf3f",
        "https://ensi.rnu.tn/Anniv40ENSI/index.html"
      ),
      new Project(
        "Financial Operations App - 2023",
        "The Financial Operations App is an academic endeavor aimed at implementing fundamental financial concepts, such as simple interest, through an intuitive web application. Built using HTML, CSS, and JavaScript, this project provides a hands-on learning experience in managing financial operations effectively. Explore the app to gain insights into essential financial principles in a user-friendly interface.",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-5b93c.appspot.com/o/PROJECTS%2Ffinanceprojet.png?alt=media&token=e962b5cf-64a8-4c5c-85ed-1bb8e062388b",
        "https://github.com/MiroJlassi/Finance"
      ),
      new Project(
        "E-BANK - 2023",
        "E-Bank is an academic project developed to master the main features of the C language. This project enables users to create client profiles, add them to the database, and perform various transactions securely.",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-5b93c.appspot.com/o/PROJECTS%2Febank.png?alt=media&token=c72ca616-3ac6-4657-9278-c4bbeff7e4a1",
        "https://github.com/MiroJlassi/E-BANK"
      ),
      new Project(
        "CMD-PROJECTS - 2023",
        "An exciting series where I delve into the capabilities of the Command Prompt (CMD) and push its limits by creating games and immersive experiences. Join me on this journey as I explore the endless possibilities of CMD and unleash creativity in unexpected ways.",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-5b93c.appspot.com/o/PROJECTS%2FCPT.png?alt=media&token=d9d0099a-85da-4899-8f45-a97febf5e2e0",
        "https://github.com/MiroJlassi/CMD-Projects"
      ),
      new Project(
        "MUSICAL INSTRUMENT 3D PACK 2022",
        "Comercial collection of 13 unique models crafted using Blender 3D. Perfect for 3D animation, game development, and more, this pack offers a versatile range of musical instruments to enhance your projects. Whether you're creating captivating animations or immersive gaming experiences, these meticulously designed models are ready to bring your vision to life.",
        "https://firebasestorage.googleapis.com/v0/b/portfolio-5b93c.appspot.com/o/PROJECTS%2Fmusicpack.png?alt=media&token=9d607240-0f6a-4506-b5d5-529acdeec4da",
        "https://www.youtube.com/watch?v=iM9O6NfSCp4"
      ),
    ];
  }
}
