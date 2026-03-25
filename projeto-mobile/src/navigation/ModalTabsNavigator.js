import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ModalSlideScreen from '../screens/modals/ModalSlideScreen';
import ModalFadeScreen from '../screens/modals/ModalFadeScreen';
import ModalNoneScreen from '../screens/modals/ModalNoneScreen';
import { colors } from '../styles/theme';

const Tab = createBottomTabNavigator();

const ModalTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textLight,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: colors.border,
          height: 60,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen 
        name="Slide" 
        component={ModalSlideScreen} 
        options={{ title: 'Slide' }}
      />
      <Tab.Screen 
        name="Fade" 
        component={ModalFadeScreen} 
        options={{ title: 'Fade' }}
      />
      <Tab.Screen 
        name="None" 
        component={ModalNoneScreen} 
        options={{ title: 'None' }}
      />
    </Tab.Navigator>
  );
};

export default ModalTabsNavigator;
