import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  logo: {
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,
  },
  searchInput: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 20,
    marginHorizontal: 30,
    marginBottom: 20,
  },
  flatListContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
  },
  pokemonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'rgba(255,0,0,0.27)',
    borderRadius: 10,
    marginVertical: 10,
  },
  pokemonImage: {
    width: 100,
    height: 100,
    marginLeft: 10,
    marginRight: 10,
  },
  pokemonIndex: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  pokemonId: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pokemonName: {
    fontSize: 18,
  },
});
