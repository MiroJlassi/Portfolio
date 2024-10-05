export class Game {
  Name: string = "";
  Description: string = "";
  ImageLink: string = "";
  GameLink: string = "";


  constructor(name: string, desc: string, img: string, link: string) {
    this.Name = name;
    this.Description = desc;
    this.ImageLink = img;
    this.GameLink = link;
  }
}
