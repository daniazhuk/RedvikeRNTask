import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {fetchPokemonList} from '../../store/actions';
import {Pokemon} from '../../types/Pokemon';
import {images} from '../../assets';
import {styles} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../navigation/AppNavigator';

type MainScreenNavigationProp = StackNavigationProp<StackParamList, 'Main'>;
interface MainScreenProps {
  navigation: MainScreenNavigationProp;
}

const MainScreen: React.FC<MainScreenProps> = ({navigation}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const {pokemonList} = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  const filteredPokemon = useMemo(() => {
    return pokemonList.filter((pokemon: Pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [pokemonList, searchTerm]);

  const handlePokemonPress = useCallback(
    (pokemon: Pokemon) => {
      navigation.navigate('Info', {pokemon});
    },
    [navigation],
  );

  const renderPokemonItem = useCallback(
    ({item}: {item: Pokemon}) => {
      return (
        <TouchableOpacity onPress={() => handlePokemonPress(item)}>
          <View style={styles.pokemonItem}>
            <Image source={images[item.id - 1]} style={styles.pokemonImage} />
            <Text style={styles.pokemonId}>{item.id}. </Text>
            <Text style={styles.pokemonName}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      );
    },
    [handlePokemonPress],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Pokédex</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Pokemon"
        value={searchTerm}
        onChangeText={text => setSearchTerm(text)}
      />
      <FlatList
        data={filteredPokemon}
        keyExtractor={(item: Pokemon) => item.id.toString()}
        style={styles.flatListContainer}
        renderItem={renderPokemonItem}
      />
    </View>
  );
};

export default MainScreen;
