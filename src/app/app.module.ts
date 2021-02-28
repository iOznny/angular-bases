import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { HeroesModule } from './heroes/heroes.module';
import { CounterModule } from './counter/counter/counter.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    CounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
