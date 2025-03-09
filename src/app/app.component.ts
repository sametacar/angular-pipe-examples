import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { RingBearerPipe, RaceIconPipe } from './pipes';
import { CharacterFormatterPipe } from './pipes/character-formatter.pipe';
import { CharacterFormatterImpurePipe } from './pipes/character-formatter-impure.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RingBearerPipe,
    RaceIconPipe,
    CharacterFormatterPipe,
    CharacterFormatterImpurePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '| angular pipe examples |';
  ngOnInit() {}

  // Characters data
  characters = [
    {
      name: 'Frodo Baggins',
      race: 'Hobbit',
      age: 50,
      weapon: 'Sting',
      ringBearer: true,
      birthDate: new Date(2968, 8, 22), // September 22, 2968 Third Age
    },
    {
      name: 'Bilbo Baggins',
      race: 'Hobbit',
      age: 111,
      weapon: 'Sting',
      ringBearer: true,
      birthDate: new Date(2890, 8, 22), // September 22, 2890 Third Age
    },
    {
      name: 'Gandalf the Grey',
      race: 'Maia',
      age: 50000,
      weapon: 'Glamdring',
      ringBearer: false,
      birthDate: null, // Unknown exact date
    },
    {
      name: 'Aragorn',
      race: 'Human',
      age: 87,
      weapon: 'Andúril',
      ringBearer: false,
      birthDate: new Date(2931, 2, 1), // March 1, 2931 Third Age
    },
    {
      name: 'Legolas',
      race: 'Elf',
      age: 2931,
      weapon: 'Bow and daggers',
      ringBearer: false,
      birthDate: new Date(0, 0, 1), // Unknown exact date
    },
    {
      name: 'Gimli',
      race: 'Dwarf',
      age: 139,
      weapon: 'Battle axe',
      ringBearer: false,
      birthDate: new Date(2879, 0, 1), // Year 2879 Third Age
    },
    {
      name: 'Sauron',
      race: 'Maia',
      age: 50000,
      weapon: 'One ring',
      ringBearer: true,
      birthDate: null, // Unknown exact date
    },
    {
      name: 'Witch King',
      race: 'Wraith',
      age: 4200,
      weapon: 'Morgul blade',
      ringBearer: false,
      birthDate: new Date(0, 0, 1), // Unknown exact date
    },
    {
      name: 'Lurtz',
      race: 'Uruk-hai',
      age: 1,
      weapon: 'Bow and scimitar',
      ringBearer: false,
      birthDate: new Date(3018, 1, 1), // Year 3018 Third Age
    },
  ];

  // Selected character for individual pipe examples
  character = this.characters[0];

  // Observable for async pipe example
  character$: Observable<any> = of(this.characters[2]).pipe(
    delay(1000) // Simulate network delay
  );

  // Current date for date pipe examples
  currentDate = new Date();

  // Currency example
  weaponValue = 150.75;

  // Decimal example
  elfAgeRatio = 0.0342;

  // Format options for character formatter pipes
  formatOptions: { [key: string]: string } = {
    showRace: 'true',
    showAge: 'true',
    showWeapon: 'true',
    titlePrefix: 'Brave',
  };

  // Method to select a character
  selectCharacter(char: any): void {
    this.character = char;
  }

  // Method to change format options
  changeFormatOptions(): void {
    // Modify the existing object properties (same reference)
    const prefixes = ['Brave', 'Mighty', 'Honorable', 'Legendary', 'Valiant'];
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];

    // Update the existing object (doesn't change reference)
    this.formatOptions['titlePrefix'] = randomPrefix;

    // Toggle showing weapon
    this.formatOptions['showWeapon'] =
      this.formatOptions['showWeapon'] === 'true' ? 'false' : 'true';
  }

  ngAfterContentChecked() {
    console.log('ngAfterViewChecked');
  }
}
