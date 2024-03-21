import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers';
import {Pokemon} from '../types/Pokemon';
export interface RootState {
  pokemonList: Pokemon[];
}

// export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
