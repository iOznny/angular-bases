import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})

export class AddComponent {
  
  //@Output() onNewChar: EventEmitter<Character> = new EventEmitter();
  @Input() public character: Character = {
    name: '',
    power: 0
  };

  constructor(private dbz: DBZService) { }

  add() {
    // Validación del registro.
    if(this.character.name.trim().length == 0) { return; }

    //this.onNewChar.emit(this.character);
    this.dbz.addCharacter(this.character);
    
    this.character = {
      name: '',
      power: 0
    }
  }

}
