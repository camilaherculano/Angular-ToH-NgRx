import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, switchMap, debounceTime } from 'rxjs/operators';
import { Hero } from '../hero';
import { IAppState } from '../heroes/store/app.state';
import { Store } from '@ngrx/store';
import { HeroActionsType } from '../heroes/store/actions/heroes.actions';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private store: Store<IAppState>
    ) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => {
        this.store.dispatch({ type: HeroActionsType.SearchHero, payload: term });
        return this.heroes$;
      })
      // switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }

}
