import React from 'react';
import {View, Text, Image} from 'react-native';
import {images} from '../../assets';
import {styles} from './styles';
import {Pokemon} from '../../types/Pokemon';

interface InfoScreenProps {
  route: {
    params: {
      pokemon: Pokemon;
    };
  };
}
const InfoScreen: React.FC<InfoScreenProps> = ({route}) => {
  const {pokemon} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.primaryContainer}>
        <Image source={images[pokemon.id - 1]} style={styles.pokemonImage} />
        <View style={styles.statContainer}>
          <Text style={styles.pokemonName}>{pokemon.name}</Text>
          <Text style={styles.pokemonNormal}>
            <Text style={styles.pokemonBold}>Id:</Text> {pokemon.id}
          </Text>
          <Text style={styles.pokemonNormal}>
            <Text style={styles.pokemonBold}>Types:</Text>{' '}
            {pokemon.types.join(', ')}
          </Text>
        </View>
      </View>
      <View style={styles.statContainer}>
        <Text style={styles.pokemonNormal}>
          <Text style={styles.pokemonBold}>Height:</Text> {pokemon.height}
        </Text>
        <Text style={styles.pokemonNormal}>
          <Text style={styles.pokemonBold}>Weight:</Text> {pokemon.weight}
        </Text>
        <Text style={styles.pokemonNormal}>
          <Text style={styles.pokemonBold}>Base Experience:</Text>{' '}
          {pokemon.baseExperience}
        </Text>
      </View>
      <View style={styles.statContainer}>
        <Text style={styles.pokemonBold}>Stats:</Text>
        <Text style={styles.pokemonStats}>HP: {pokemon.stats.hp}</Text>
        <Text style={styles.pokemonStats}>ATTACH: {pokemon.stats.attack}</Text>
        <Text style={styles.pokemonStats}>
          DEFENSE: {pokemon.stats.defense}
        </Text>
        <Text style={styles.pokemonStats}>
          SPECIAL ATTACK: {pokemon.stats.specialAttack}
        </Text>
        <Text style={styles.pokemonStats}>
          SPECIAL DEFENSE: {pokemon.stats.specialDefense}
        </Text>
      </View>
    </View>
  );
};

export default InfoScreen;
