import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ModalTabsNavigator from './ModalTabsNavigator';
import ScrollTabsNavigator from './ScrollTabsNavigator';
import { colors } from '../styles/theme';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: colors.text,
        drawerStyle: {
          backgroundColor: colors.white,
          width: 280,
        },
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: '500',
        },
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Início' }}
      />
      <Drawer.Screen 
        name="Modais" 
        component={ModalTabsNavigator} 
        options={{ title: 'Telas de Modais' }}
      />
      <Drawer.Screen 
        name="Scrolls" 
        component={ScrollTabsNavigator} 
        options={{ title: 'Listas com Rolagem' }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
