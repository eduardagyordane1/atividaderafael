import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ModalTabsNavigator from './ModalTabsNavigator';
import { colors } from '../styles/theme';

const Drawer = createDrawerNavigator();

const DrawerModalNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: colors.text,
        drawerStyle: {
          backgroundColor: colors.background,
          width: 240,
        },
      }}
    >
      <Drawer.Screen 
        name="ModaisTabs" 
        component={ModalTabsNavigator} 
        options={{ title: 'Opções de Modais' }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerModalNavigator;
