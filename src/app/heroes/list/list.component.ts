import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})

export class ListComponent {

  public heroes:  string[] = ['Spiderman', 'Ironman', 'Wannda', 'Thor', 'Visión'];
  public heroeDelete: string;

  deleteHeroe(): void {
    this.heroeDelete = this.heroes.shift();
  }

}
