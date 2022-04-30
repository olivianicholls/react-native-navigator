import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './components/screens/HomeScreen/HomeScreen';
import DetailsScreen from './components/screens/DetailsScreen/DetailsScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </NavigationContainer>
  );
}

export default App;