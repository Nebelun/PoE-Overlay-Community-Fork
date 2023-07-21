import { Injectable } from '@angular/core'
import { default as d } from '../../../../../assets/poe/stats.json'
import { StatMap, StatType } from '../type'

interface StatTypeMap {
  [statType: string]: StatMap
}

@Injectable({
  providedIn: 'root',
})
export class StatsProvider {
  public provide(group: StatType): StatMap {
    const data = d as StatTypeMap
    return data[StatType[group]]
  }
}
