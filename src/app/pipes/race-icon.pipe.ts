import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'raceIcon',
  standalone: true,
})
export class RaceIconPipe implements PipeTransform {
  transform(race: string): string {
    const icons: any = {
      Hobbit: '🧝‍♂️ Hobbit',
      Elf: '🏹 Elf',
      Dwarf: '⛏️ Dwarf',
      Human: '🛡️ Human',
      Maia: '🔥 Maia',
      Wraith: '👻 Wraith',
      'Uruk-hai': '👹 Uruk-hai',
    };
    return icons[race] || race;
  }
}
