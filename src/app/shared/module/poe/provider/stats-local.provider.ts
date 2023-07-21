import { Injectable } from '@angular/core'
import { default as data } from '../../../../../assets/poe/stats-local.json'
import { StatLocalMap, StatType } from '../type'

@Injectable({
  providedIn: 'root',
})
export class StatsLocalProvider {
  public provide(group: StatType): StatLocalMap {
    switch (group) {
      case StatType.Pseudo:
        return data.pseudo
      case StatType.Explicit:
        return data.explicit
      case StatType.Implicit:
        return data.implicit
      case StatType.Crafted:
        return data.crafted
      case StatType.Fractured:
        return data.fractured
      case StatType.Enchant:
        return data.enchant
      case StatType.Veiled:
        return data.veiled
      case StatType.Monster:
        return data.monster
      case StatType.Ultimatum:
        return data.ultimatum
      case StatType.Scourge:
        return data.scourge
      case StatType.Crucible:
        return data.crucible
    }
  }
}
