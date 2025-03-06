import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterFormatterImpure',
  standalone: true,
  pure: false, // Impure pipe - will be called on every change detection cycle
})
export class CharacterFormatterImpurePipe implements PipeTransform {
  private counter = 0;

  transform(
    character: any,
    formatOptions: { [key: string]: string } = {}
  ): string {
    this.counter++;
    console.log(`Impure pipe executed ${this.counter} times`);
    console.log('Character (impure):', character);
    console.log('Format options (impure):', formatOptions);

    if (!character) {
      return 'No character selected';
    }

    let result = `${character.name}`;

    if (formatOptions['showRace'] && character.race) {
      result += ` the ${character.race}`;
    }

    if (formatOptions['showAge'] && character.age) {
      result += `, age ${character.age}`;
    }

    if (formatOptions['showWeapon'] && character.weapon) {
      result += `, wielding ${character.weapon}`;
    }

    if (formatOptions['titlePrefix']) {
      result = `${formatOptions['titlePrefix']} ${result}`;
    }

    return result;
  }
}
