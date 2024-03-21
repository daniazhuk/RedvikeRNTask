import axios, {AxiosError} from 'axios';

export const fetchPokemonInfo = async (id: number) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/item/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error((error as AxiosError).message);
  }
};
