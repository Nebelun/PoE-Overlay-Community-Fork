import { Injectable } from '@angular/core'
import { default as d } from '../../../../../assets/poe/client-strings.json'
import { ClientStringMap, Language } from '../type'

interface ClientStringLangMap {
  [language: string]: ClientStringMap
}

@Injectable({
  providedIn: 'root',
})
export class ClientStringProvider {
  public provide(language: Language): ClientStringMap {
    const data = d as ClientStringLangMap
    return data[Language[language]]
  }
}
