import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  primaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginBottom: 10,
  },
  statContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    marginVertical: 40,
    marginHorizontal: 20,
  },
  pokemonImage: {
    width: 200,
    height: 200,
    marginRight: 10,
  },
  pokemonName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  pokemonNormal: {
    fontSize: 18,
  },
  pokemonBold: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pokemonTypes: {
    fontSize: 16,
  },
  pokemonInfo: {
    fontSize: 16,
    marginTop: 10,
  },
  pokemonStats: {
    fontSize: 16,
    marginTop: 5,
  },
});
