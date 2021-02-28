import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})

export class AddComponent {

  @Input() public characters: Character[] = [];
  @Input() public character: Character = {
    name: '',
    power: 0
  };

  add() {
    // Validación del registro.
    if(this.character.name.trim().length == 0) { return; }

    this.characters.push(this.character);
    this.character = {
      name: '',
      power: 0
    }
  }

}
