import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterFormatter',
  standalone: true,
  pure: true, // Pure pipe - will NOT be called when object contents change
})
export class CharacterFormatterPipe implements PipeTransform {
  private counter = 0;

  transform(
    character: any,
    formatOptions: { [key: string]: string } = {}
  ): string {
    this.counter++;
    console.log(`Pure pipe executed ${this.counter} times`);
    console.log('Character:', character);
    console.log('Format options:', formatOptions);

    if (!character) {
      return 'No character selected';
    }

    let result = `${character.name}`;

    if (formatOptions['showRace'] === 'true' && character.race) {
      result += ` the ${character.race}`;
    }

    if (formatOptions['showAge'] === 'true' && character.age) {
      result += `, age ${character.age}`;
    }

    if (formatOptions['showWeapon'] === 'true' && character.weapon) {
      result += `, wielding ${character.weapon}`;
    }

    if (formatOptions['titlePrefix']) {
      result = `${formatOptions['titlePrefix']} ${result}`;
    }

    return result;
  }
}
