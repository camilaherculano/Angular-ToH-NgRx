import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HeroService } from 'src/app/hero.service';

import * as Heroes from '../actions/heroes.actions';

@Injectable()
export class HeroesEffects {
  @Effect()
  loadHeroes$ = this.actions$.pipe(
    ofType(Heroes.HeroActionsType.LoadHeroes),
    mergeMap(() => {
      return this.heroesService.getHeroes().pipe(
        map(res => new Heroes.LoadHeroesSuccess(res)),
        catchError(error => of(new Heroes.LoadHeroesError(error)))
      );
    })
  );

  @Effect({ dispatch: false })
  serverFailure$ = this.actions$.pipe(
    ofType(Heroes.HeroActionsType.LoadHeroesError),
    map((action: Heroes.LoadHeroesError) => action.payload),
    exhaustMap(errors => {
      console.log('Server error: ', errors);
      return of(null);
    })
  );

  constructor(private actions$: Actions, private heroesService: HeroService) {}
}
