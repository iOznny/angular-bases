import { Component } from '@angular/core';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html'
})

export class HeroesComponent {
    public heroe: string = 'Ironman';
    public age: number = 45;

    get nameCapitalize(): string {
        return this.heroe.toUpperCase();
    }

    getName(): string {
        return `${ this.heroe } - ${ this.age }`;
    }

    changeName(): void {
        this.heroe = 'Spiderman';
    }

    changeAge(): void {
        this.age = 60;
    }
}