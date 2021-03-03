import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})

export class CharactersComponent {

  get characters() {
    return this.dbz.characters;
  }

  constructor(private dbz: DBZService) { }
  
}
