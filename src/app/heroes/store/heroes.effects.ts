import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { HeroService } from 'src/app/hero.service';

@Injectable()
export class HeroesEffects {

  @Effect()
  loadHeroes$ = this.actions$
    .pipe(
      ofType('[Hero] Load Heroes'),
      mergeMap(() => this.heroService.getHeroes()
        .pipe(
          catchError(() => EMPTY)
        ))
    );

    constructor(
      private actions$: Actions,
      private heroService: HeroService
    ) {}
}
