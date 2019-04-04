import { IHeroState, initialHeroState } from './heroes.reducer';

export interface IAppState {
  heroes: IHeroState;
}

export const initialAppState: IAppState = {
  heroes: initialHeroState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
