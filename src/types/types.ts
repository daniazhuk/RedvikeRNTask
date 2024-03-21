import {ActionType} from '../store/actionTypes';
import {Pokemon} from './Pokemon';

export interface FetchPokemonListSuccessAction {
  type: ActionType.FETCH_POKEMON_LIST_SUCCESS;
  payload: Pokemon[];
}

export interface FetchPokemonListErrorAction {
  type: ActionType.FETCH_POKEMON_LIST_ERROR;
  payload: string;
}

export type PokemonAction =
  | FetchPokemonListSuccessAction
  | FetchPokemonListErrorAction;

export interface PokemonDetail {
  height: number;
  weight: number;
  base_experience: number;
  types: {type: {name: string}}[];
  stats: {base_stat: number}[];
}

export interface PokemonData {
  results: {name: string; url: string}[];
}
