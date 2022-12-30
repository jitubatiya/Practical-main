/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import configStore from './Src/Redux/store/store';
const getStore = configStore()
import {

  Text,
  useColorScheme,
  View,
} from 'react-native';
import RootStack from './Src/Navigation/RootStack';
const App = () => {
  return (
    <Provider store={getStore}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );

}
export default App;