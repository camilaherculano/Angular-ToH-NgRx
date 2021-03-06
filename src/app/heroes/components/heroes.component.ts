
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { Store, select } from '@ngrx/store';
import { selectHeroes } from '../store/reducers/heroes.reducer';
import { IAppState } from '../store/app.state';
import { HeroActionsType } from '../store/actions/heroes.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private store: Store<IAppState>
    ) { }

  ngOnInit() {
    this.store.pipe(select(selectHeroes)).subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  getHeroes(): void {
    this.store.pipe(select(selectHeroes)).subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }

    this.store.dispatch({ type: HeroActionsType.AddHero, payload: { name } });
  }

  delete(hero: Hero): void {
    this.store.dispatch({ type: HeroActionsType.RemoveHero, payload: hero });
  }
}
