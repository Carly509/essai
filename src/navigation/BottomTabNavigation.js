/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import Dashboard from '../screen/Dashboard';
import Notifications from '../screen/Notifications';
import Preferences from '../screen/Preferences';
import AuthStack from './AuthStack';

const Tab = createBottomTabNavigator();

const AppTab = () => {
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
        <Tab.Navigator
          tabBarOptions={{
            activeBackgroundColor: '#189823',
            inactiveBackgroundColor: '#189823',
            activeTintColor: '#fff',
            inactiveTintColor: '#fff',
          }}>
          <Tab.Screen
            name="Dashboard"
            options={{
              tabBarIcon: ({ focused }) => {
                const icon = focused ? (
                  <MaterialCommunityIcons style={{ fontSize: 20 }} color="#fff" name="home" />
                ) : (
                    <MaterialCommunityIcons style={{ fontSize: 20 }} color="#fff" name="home-outline" />
                  );

                return icon;
              },
            }}
            component={Dashboard}
          />
          <Tab.Screen
            name="Notifications"
            options={{
              tabBarIcon: ({ focused }) => {
                const icon = focused ? (
                  <Ionicons style={{ fontSize: 20 }} color="#fff" name="ios-notifications" />
                ) : (
                    <Ionicons name="ios-notifications-outline" size={24} color="#fff" />
                  );
                return icon;
              },
            }}
            component={Notifications}
          />
          <Tab.Screen
            name="Preferences"
            options={{
              tabBarIcon: ({ focused }) => {
                const icon = focused ? (
                  <MaterialCommunityIcons style={{ fontSize: 20 }} color="#fff" name="settings" />
                ) : (
                    <MaterialCommunityIcons
                      style={{ fontSize: 20 }}
                      color={focused ? '#fff' : '#fff'}
                      name="settings-outline"
                    />
                  );
                return icon;
              },
            }}
            component={Preferences}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </>
  );
};

export default AppTab;
