import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h3>La base es: {{ base }}</h3>
        <button (click)="acumular(base)">+ {{ base }}</button>
        <span>{{ num }}</span>
        <button (click)="acumular(-base)">- {{ base }}</button>
    `
})

export class CounterComponent {
    public num: number = 0;
    public base: number = 5;
  
    acumular(value: number) {
      this.num += value;
    }
}