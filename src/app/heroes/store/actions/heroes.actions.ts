import { Action } from '@ngrx/store';

import { Hero } from '../../../hero';

export enum HeroActionsType {
  LoadHeroes = '[Hero] Load Heroes',
  AddHero = '[Hero] Add Hero',
  RemoveHero = '[Hero] Remove Hero',
  LoadHeroesSuccess = '[Heroes API] Heroes Loaded Success',
  LoadHeroesError = '[Heroes API] Heroes Loaded Error'
}

export class LoadHeroes implements Action {
  readonly type = HeroActionsType.LoadHeroes;
}

export class AddHero implements Action {
  readonly type = HeroActionsType.AddHero;

  constructor(public payload: Hero) {}
}

export class RemoveHero implements Action {
  readonly type = HeroActionsType.RemoveHero;

  constructor(public payload: Hero) {}
}

export class LoadHeroesSuccess implements Action {
  readonly type = HeroActionsType.LoadHeroesSuccess;

  constructor(public payload: any) {}
}

export class LoadHeroesError implements Action {
  readonly type = HeroActionsType.LoadHeroesError;

  constructor(public payload: any) {}
}

export type HeroActionsUnion =
  | LoadHeroes
  | AddHero
  | RemoveHero
  | LoadHeroesSuccess
  | LoadHeroesError;
