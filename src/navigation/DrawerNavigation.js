/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import Dashboard from '../screen/Dashboard';
import Notifications from '../screen/Notifications';
import Preferences from '../screen/Preferences';
import withMenu from '../hoc/withMenu';
import AuthStack from './AuthStack';

const Drawer = createDrawerNavigator();

const DashboardWithMenu = withMenu(Dashboard, 'Dashboard');
const NotificationsWithMenu = withMenu(Notifications, 'Notifications');
const PreferencesWithMenu = withMenu(Preferences, 'Preferences');

const AppDrawer = () => {
  const authState = useSelector(state => state.auth);

  const isAuthenticated = authState.token;

  if (!isAuthenticated) {
    return (
      <AuthStack />
    );
  }

  return (
    <>
      <SafeAreaView style={{ backgroundColor: 'white' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#189823' }} >
        <Drawer.Navigator
          drawerContentOptions={{
            backgroundColor: '#189823',
            activeTintColor: '#fff',
            inactiveTintColor: '#fff',
          }}>
          <Drawer.Screen
            name="Dashboard"
            options={{
              drawerLabel: 'Dashboard',
              title: 'Dashboard',
              drawerIcon: ({ focused }) => {
                const icon = focused ? (
                  <MaterialCommunityIcons size={20} color="#fff" name="home" />
                ) : (
                    <MaterialCommunityIcons size={20} color="#fff" name="home-outline" />
                  );

                return icon;
              },
            }}
            component={DashboardWithMenu}
          />
          <Drawer.Screen
            name="Preferences"
            options={{
              drawerIcon: ({ focused }) => {
                const icon = focused ? (
                  <MaterialIcons size={20} color="#fff" name="settings" />
                ) : (
                    <MaterialCommunityIcons size={20} color="#fff" name="settings-outline" />
                  );

                return icon;
              },
            }}
            component={PreferencesWithMenu}
          />
          <Drawer.Screen
            name="Notifications"

            options={{
              drawerIcon: ({ focused }) => {
                const icon = focused ? (
                  <MaterialIcons size={20} color="#fff" name="notifications" />
                ) : (
                    <MaterialIcons name="notifications-none" size={20} color="#fff" />
                  );

                return icon;
              },
            }}
            component={NotificationsWithMenu}
          />
        </Drawer.Navigator>
      </SafeAreaView>
    </>
  );
};

export default AppDrawer;
