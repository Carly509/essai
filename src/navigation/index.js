import React from 'react';
import { Platform } from 'react-native';
import DrawerNavigation from './DrawerNavigation';
import BottomTabNavigation from './BottomTabNavigation';

const AppNavigation = () => {
  return Platform.OS === 'android' ? <DrawerNavigation /> : <BottomTabNavigation />;
};

export default AppNavigation;
