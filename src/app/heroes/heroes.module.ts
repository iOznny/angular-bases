import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroesComponent } from './heroe/heroes.component';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [
        HeroesComponent,
        ListComponent
    ],
    exports: [
        HeroesComponent,
        ListComponent
    ],
    imports: [
        CommonModule
    ]
})

export class HeroesModule { }