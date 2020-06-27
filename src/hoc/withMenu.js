/* eslint-disable react/prop-types */
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Theme from '../Theme';

const withMenu = (WrappedComponent, screenTitle = null) => {
  return ({ navigation }) => (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ flex: 1, position: 'absolute', left: 10 }}
          onPress={() => navigation.openDrawer()}>
          <MaterialCommunityIcons color={Theme.colors.white} name="menu" size={30} />
        </TouchableOpacity>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>{screenTitle}</Text>
      </View>
      <WrappedComponent navigation={navigation} />
    </View>
  );
};

const styles = {
  container: {
    height: 50,
    backgroundColor: Theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default withMenu;
