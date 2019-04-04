import * as actions from './heroes.actions';
import { Hero } from '../../hero';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from './app.state';

export interface IHeroState {
  heroes: Hero[];
}

export const initialHeroState: IHeroState = {
  heroes: []
};

export function getInitialHeroState(): IHeroState {
  return initialHeroState;
}

export function heroReducer(
  state = initialHeroState,
  action: actions.HeroActionsUnion
): IHeroState {
  switch (action.type) {
    case actions.HeroActionsType.LoadHeroes: {
      return {
        ...state
      };
    }

    case actions.HeroActionsType.AddHero: {
      const heroItemsId: number[] = state.heroes
        .map(hero => hero.id);

      // const lastId = heroItemsId   [heroItemsId.length - 1];
      const lastId = heroItemsId.length > 0 ? Math.max(...heroItemsId) + 1 : 1;

      const data: Hero = { id: lastId || 1, name: action.payload.name };

      return {
        ...state,
        heroes: [...state.heroes, data]
        };
      }

    case actions.HeroActionsType.RemoveHero: {
      const heroes = state.heroes
        .filter(item => {
        return item.id !== action.payload.id;
      });

      return {
        ...state,
        heroes
      };
    }

    default: {
      return state;
    }
  }
}

export const selectHeroesState = (state: IAppState) => state.heroes;

export const selectHeroes = createSelector(
  selectHeroesState,
  (state: IHeroState) => state.heroes
);

export const selectHeroById = createSelector(
  selectHeroesState,
  (state: IHeroState, { id }) => state.heroes.find(hero => hero.id === id)
);

// export const heroAdapter = createEntityAdapter<IHeroState>();
// export interface IHeroState extends EntityState<IHeroState> { }

// export const getHeroes = (state: IHeroState) => state.heroes;
// export const getHeroesState = createFeatureSelector<IHeroState>('heroes');

// export const {
//   selectAll,
//   selectIds
// } = heroAdapter.getSelectors(getHeroState);
