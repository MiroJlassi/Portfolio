import { Injectable } from '@angular/core';
import { en } from "../app/Localization/en";
import { fr } from "../app/Localization/fr";
import { ar } from "../app/Localization/ar";
import { es } from "../app/Localization/es";

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: any = en; 
  private currentLanguage: string = "EN";

  switchLanguage(language: string) {
    this.currentLanguage = language;
    switch (language) {
      case "EN":
        this.translations = en;
        break;
      case "FR":
        this.translations = fr;
        break;
      case "AR":
        this.translations = ar;
        break;
      case "ES":
        this.translations = es;
        break;
    }
  }

  translate(key: string): string { 
    return this.translations[key] || key;
  }
}
