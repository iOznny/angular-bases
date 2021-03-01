import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public newCharacter: Character = {
    name: 'Testing',
    power: 100
  }

  constructor(private dbz: DBZService) {
  }

  // Añadimos los argumentos que vienen desde el componente hijo (add).
  addCharacter(e: Character) {
    //console.log(e);
    //debugger;
   
    //this.characters.push(e);
  }

}
