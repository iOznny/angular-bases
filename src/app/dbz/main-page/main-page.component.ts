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

}
