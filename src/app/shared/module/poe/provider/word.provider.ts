import { Injectable } from '@angular/core'
import { default as data } from '../../../../../assets/poe/words.json'
import { Language, WordMap } from '../type'

@Injectable({
  providedIn: 'root',
})
export class WordProvider {
  public provide(language: Language): WordMap {
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
        throw new Error(`Could not map words to language: '${Language[language]}'.`)
    }
  }
}
