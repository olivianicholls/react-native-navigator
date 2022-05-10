import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationHeader } from './components/navigation/NavigationHeader';

import HomeScreen from './components/screens/HomeScreen/HomeScreen';
import DetailsScreen from './components/screens/DetailsScreen/DetailsScreen';
import CreatePostScreen from './components/screens/CreatePostScreen/CreatePostScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <NavigationHeader {...props} />,
        drawerActiveBackgroundColor: 'red',
        drawerPosition: 'right',
        drawerType: 'slide'
      }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
        <Drawer.Screen name="CreatePost" component={CreatePostScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;