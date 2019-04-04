import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { IHeroState } from '../heroes/store/heroes.reducer';
import { Store } from '@ngrx/store';
import { LoadHeroes } from '../heroes/store/heroes.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private store: Store<IHeroState>
    ) { }

  ngOnInit() {
    this.getHeroes();
    this.store.dispatch(new LoadHeroes());
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
