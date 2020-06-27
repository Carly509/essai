import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import RobotoBold from './assets/fonts/Roboto-Bold.ttf';
import RobotoRegular from './assets/fonts/Roboto-Regular.ttf';
import SourceCodeProRegular from './assets/fonts/SourceCodePro-Regular.ttf';
import RobotoMedium from './assets/fonts/Roboto-Medium.ttf';
import { store, persistor } from './src/redux/store';
import Theme from './src/Theme';
import AppNavigation from './src/navigation';

// For development only. We use those when we want to
// reset the store and pause redux-persist respectively
// persistor.purge();
// persistor.pause();

const App = () => {
  const [isReady, setIsReady] = React.useState(false);

  const cacheFonts = (fonts) => {
    return fonts.map((font) => Font.loadAsync(font));
  };

  const cacheResourcesAsync = async () => {
    const fonts = [
      {
        'Roboto-Bold': RobotoBold,
        Roboto: RobotoBold,
        'Roboto-Medium': RobotoMedium,
        'Roboto-Regular': RobotoRegular,
        'Source Code Pro': SourceCodeProRegular,
      },
    ];

    const fontAssets = cacheFonts(fonts);

    await Promise.all([...fontAssets]);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={cacheResourcesAsync}
        onFinish={() => setIsReady(true)}
        // eslint-disable-next-line no-console
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor={Theme.colors.primary} barStyle="light-content" />
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
