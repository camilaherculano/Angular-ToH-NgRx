import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from './heroes/store/app.state';
import { HeroActionsType } from './heroes/store/actions/heroes.actions';
import { selectHeroes } from './heroes/store/reducers/heroes.reducer';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes NgRx';
  heroes: Hero[];

  constructor(
    private store: Store<IAppState>
    ) { }

  ngOnInit() {
    this.store.pipe(select(selectHeroes)).subscribe(heroes => {
      this.heroes = heroes;
    });

    this.store.dispatch({ type: HeroActionsType.LoadHeroes });
  }
}
