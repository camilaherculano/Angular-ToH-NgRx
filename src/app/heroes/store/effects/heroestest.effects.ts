import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map, exhaustMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HeroService } from 'src/app/hero.service';

import * as Heroes from '../actions/heroes.actions';

@Injectable()
export class HeroesEffects {
  @Effect()
  loadHeroes$ = this.actions$.pipe(
    ofType(Heroes.HeroActionsType.LoadHeroes),
    mergeMap(() =>
        this.heroesService.getHeroes().pipe(
        map(res => new Heroes.LoadHeroesSuccess(res)),
        catchError(error => of(new Heroes.LoadHeroesError(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  serverFailure$ = this.actions$.pipe(
    ofType(Heroes.HeroActionsType.LoadHeroesError, Heroes.HeroActionsType.UpdateHeroesError),
    map((action: Heroes.HeroesError) => action.payload),
    tap(errors => {
      console.log('Server error: ', errors);
    })
  );

  @Effect()
  updateHeroes$ = this.actions$.pipe(
    ofType(Heroes.HeroActionsType.UpdateHeroes),
    mergeMap(() =>
        this.heroesService.getHeroes().pipe(
        map(res => new Heroes.UpdateHeroesSuccess(res)),
        catchError(error => of(new Heroes.UpdateHeroesError(error)))
      )
    )
  );

  constructor(private actions$: Actions, private heroesService: HeroService) {}
}
