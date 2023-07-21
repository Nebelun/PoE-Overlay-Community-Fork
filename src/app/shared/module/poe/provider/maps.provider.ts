import { Injectable } from '@angular/core'
import { default as data } from '../../../../../assets/poe/maps.json'
import { AtlasMapsMap } from '../type'

@Injectable({
  providedIn: 'root',
})
export class MapsProvider {
  public provide(): AtlasMapsMap {
    return data.Default
  }
}
