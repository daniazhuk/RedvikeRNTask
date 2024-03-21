import {ActionType} from './actionTypes';
import {Pokemon} from '../types/Pokemon';

export interface State {
  pokemonList: Pokemon[];
  error: string | null;
}

const initialState: State = {
  pokemonList: [],
  error: null,
};

const rootReducer = (state: State = initialState, action: any) => {
  switch (action.type) {
    case ActionType.FETCH_POKEMON_LIST_SUCCESS:
      return {...state, pokemonList: action.payload, error: null};
    case ActionType.FETCH_POKEMON_LIST_ERROR:
      return {...state, error: action.payload};
    default:
      return state;
  }
};

export default rootReducer;
