
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';
import { Store, select } from '@ngrx/store';
import { IHeroState, selectHeroes } from '../store/heroes.reducer';
import { IAppState } from '../store/app.state';
import { tap } from 'rxjs/operators';
import { HeroActionsType } from '../store/heroes.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(
    public heroService: HeroService,
    private store: Store<IAppState>
    ) { }

  ngOnInit() {
    // this.getHeroes();


    this.store.pipe(select(selectHeroes)).subscribe(heroes => {
      this.heroes = heroes;
    });


    this.store.dispatch({ type: '[Hero] Load Heroes' });
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }

    this.store.dispatch({ type: HeroActionsType.AddHero, payload: { name } });

    // this.heroService.addHero({ name } as Hero)
    //   .subscribe(hero => {
    //     this.heroes.push(hero);
    //   });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
