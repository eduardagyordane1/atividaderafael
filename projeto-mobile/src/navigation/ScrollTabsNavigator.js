import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScrollViewScreen from '../screens/scroll/ScrollViewScreen';
import FlatListScreen from '../screens/scroll/FlatListScreen';
import SectionListScreen from '../screens/scroll/SectionListScreen';
import { colors } from '../styles/theme';

const Tab = createBottomTabNavigator();

const ScrollTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.secondary,
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
        name="ScrollView" 
        component={ScrollViewScreen} 
        options={{ title: 'Scroll' }}
      />
      <Tab.Screen 
        name="FlatList" 
        component={FlatListScreen} 
        options={{ title: 'FlatList' }}
      />
      <Tab.Screen 
        name="SectionList" 
        component={SectionListScreen} 
        options={{ title: 'Section' }}
      />
    </Tab.Navigator>
  );
};

export default ScrollTabsNavigator;
