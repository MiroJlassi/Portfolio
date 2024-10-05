export class Project {
  Name: string = "";
  Description: string = "";
  ImageLink: string = "";
  ProjectLink: string = "";


  constructor(name: string, desc: string, img: string, link: string) {
    this.Name = name;
    this.Description = desc;
    this.ImageLink = img;
    this.ProjectLink = link;
  }
}
