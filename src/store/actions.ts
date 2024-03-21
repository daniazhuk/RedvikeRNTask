import axios, {AxiosError} from 'axios';
import {Dispatch} from 'redux';
import {ActionType} from './actionTypes';
import {Pokemon} from '../types/Pokemon';
import {PokemonData, PokemonDetail} from '../types/types';

type PokemonAction =
  | {type: ActionType.FETCH_POKEMON_LIST_SUCCESS; payload: Pokemon[]}
  | {type: ActionType.FETCH_POKEMON_LIST_ERROR; payload: string};

export const fetchPokemonList = () => {
  return async (dispatch: Dispatch<PokemonAction>) => {
    try {
      const response = await axios.get<PokemonData>(
        'https://pokeapi.co/api/v2/pokemon?limit=151',
      );
      const pokemonListData = response.data.results;
      const pokemonPromises = pokemonListData.map(
        async (pokemonData: any, index: number) => {
          const pokemonDetailResponse = await axios.get<PokemonDetail>(
            pokemonData.url,
          );
          const pokemonDetail = pokemonDetailResponse.data;

          const pokemon: Pokemon = {
            id: index + 1,
            name: pokemonData.name,
            height: pokemonDetail.height,
            weight: pokemonDetail.weight,
            baseExperience: pokemonDetail.base_experience,
            types: pokemonDetail.types.map((type: any) => type.type.name),
            stats: {
              hp: pokemonDetail.stats[0].base_stat,
              attack: pokemonDetail.stats[1].base_stat,
              defense: pokemonDetail.stats[2].base_stat,
              specialAttack: pokemonDetail.stats[3].base_stat,
              specialDefense: pokemonDetail.stats[4].base_stat,
            },
          };

          return pokemon;
        },
      );

      const pokemonList: Pokemon[] = await Promise.all(pokemonPromises);

      dispatch({
        type: ActionType.FETCH_POKEMON_LIST_SUCCESS,
        payload: pokemonList,
      });
    } catch (error: any) {
      const errorMessage = (error as AxiosError).message;
      dispatch({
        type: ActionType.FETCH_POKEMON_LIST_ERROR,
        payload: errorMessage,
      });
    }
  };
};
