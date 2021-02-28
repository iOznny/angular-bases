import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characters: Character[] = [
    {
      name: 'Goku',
      power: 20000
    },
    {
      name: 'Krilin',
      power: 15000
    },
    {
      name: 'Vegetta',
      power: 8500
    },
  ];

}
