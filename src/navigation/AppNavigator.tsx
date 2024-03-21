import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import InfoScreen from '../screens/InfoScreen';
import {Pokemon} from '../types/Pokemon';

export type StackParamList = {
  Main: undefined;
  Info: {pokemon: Pokemon};
};

const Stack = createNativeStackNavigator<StackParamList>();

const headerOptions = {
  title: '',
  headerStyle: {
    backgroundColor: '#ececec',
  },
  headerTintColor: 'black',
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Info"
          component={InfoScreen}
          options={headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
