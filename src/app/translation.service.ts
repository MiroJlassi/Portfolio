import { Injectable } from '@angular/core';
import { en } from "../app/Localization/en";
import { fr } from "../app/Localization/fr";

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: any = en; 
  private currentLanguage: string = "en";

  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.translations = language === "fr" ? fr : en;
  }

  translate(key: string): string { 
    return this.translations[key] || key;
  }
}
