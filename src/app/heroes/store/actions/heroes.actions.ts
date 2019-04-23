import { Action } from '@ngrx/store';

import { Hero } from '../../../hero';

export enum HeroActionsType {
  LoadHeroes = '[Hero] Load Heroes',
  AddHero = '[Hero] Add Hero',
  RemoveHero = '[Hero] Remove Hero',
  LoadHeroesSuccess = '[Heroes API] Heroes Loaded Success',
  LoadHeroesError = '[Heroes API] Heroes Loaded Error',
  UpdateHero = '[Heroes API] Hero Update',
  UpdateHeroSuccess = '[Heroes API] Hero Update Success',
  UpdateHeroError = '[Heroes API] Hero Update Error',
  SearchHero = '[Heroes API] Hero Search',
  SearchHeroSuccess = '[Heroes API] Hero Search Success',
  SearchHeroError = '[Heroes API] Hero Search Error',
}

export abstract class HeroesError<T = any> {
  constructor(public payload: T) {}
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

export class LoadHeroesError extends HeroesError implements Action {
  readonly type = HeroActionsType.LoadHeroesError;
}

export class UpdateHero implements Action {
  readonly type = HeroActionsType.UpdateHero;

  constructor(public payload: Hero) {}
}

export class UpdateHeroSuccess implements Action {
  readonly type = HeroActionsType.UpdateHeroSuccess;

  constructor(public payload: any) {}
}

export class UpdateHeroError implements Action {
  readonly type = HeroActionsType.UpdateHeroError;

  constructor(public payload: any) {}
}

export class SearchHero implements Action {
  readonly type = HeroActionsType.SearchHero;

  constructor(public payload: string) {}
}

export class SearchHeroSuccess implements Action {
  readonly type = HeroActionsType.SearchHeroSuccess;

  constructor(public payload: any) {}
}

export class SearchHeroError implements Action {
  readonly type = HeroActionsType.SearchHeroError;

  constructor(public payload: any) {}
}

export type HeroActionsUnion =
  | LoadHeroes
  | AddHero
  | RemoveHero
  | LoadHeroesSuccess
  | LoadHeroesError
  | UpdateHero
  | UpdateHeroSuccess
  | UpdateHeroError
  | SearchHero
  | SearchHeroSuccess
  | SearchHeroError;
