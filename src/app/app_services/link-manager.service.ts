import { Injectable } from '@angular/core';
import { links } from './Links/links'; 
@Injectable({
  providedIn: 'root',
})
export class LinkManagerService {
  private links: any = links;

  constructor() { }

  getLinks() {
    return this.links;
  }
}

