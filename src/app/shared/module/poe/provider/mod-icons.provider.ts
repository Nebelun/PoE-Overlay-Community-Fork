import { Injectable } from '@angular/core'
import { default as data } from '../../../../../assets/poe/mod-icons.json'
import { Language, ModIconsMap } from '../type'

@Injectable({
  providedIn: 'root',
})
export class ModIconsProvider {
  public provide(language: Language): ModIconsMap {
    switch (language) {
      case Language.English:
        return data.English
      case Language.Portuguese:
        return data.Portuguese
      case Language.Russian:
        return data.Russian
      case Language.Thai:
        return data.Thai
      case Language.German:
        return data.German
      case Language.French:
        return data.French
      case Language.Spanish:
        return data.Spanish
      case Language.Korean:
        return data.Korean
      // case Language.SimplifiedChinese:
      //     return SimplifiedChinese;
      case Language.TraditionalChinese:
        return data.TraditionalChinese
      case Language.Japanese:
        return data.Japanese
      default:
        throw new Error(`Could not map mod-icons to language: '${Language[language]}'.`)
    }
  }
}
