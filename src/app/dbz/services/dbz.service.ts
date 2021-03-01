import { Injectable } from "@angular/core";
import { Character } from "../interfaces/dbz.interface";

@Injectable()
export class DBZService {

    private _characters: Character[] = [
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

    get characters(): Character[] {
        return [...this._characters];
    }

    constructor() {
        console.log('Servicio initialized');
    }

}