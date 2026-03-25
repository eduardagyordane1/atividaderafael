import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScrollTabsNavigator from './ScrollTabsNavigator';
import { colors } from '../styles/theme';

const Drawer = createDrawerNavigator();

const DrawerScrollNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: colors.secondary,
        drawerInactiveTintColor: colors.text,
        drawerStyle: {
          backgroundColor: colors.background,
          width: 240,
        },
      }}
    >
      <Drawer.Screen 
        name="ScrollTabs" 
        component={ScrollTabsNavigator} 
        options={{ title: 'Opções de Listas' }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerScrollNavigator;
