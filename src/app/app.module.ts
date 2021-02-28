import { BrowserModule } from '@angular/platform-browser';

// Modules
import { NgModule } from '@angular/core';
import { HeroesModule } from './heroes/heroes.module';
import { CounterModule } from './counter/counter/counter.module';
import { DbzModule } from './dbz/dbz.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    CounterModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
