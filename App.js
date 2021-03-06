import React from 'react';
import {StatusBar} from 'react-native';
import {AppearanceProvider, Appearance} from 'react-native-appearance';
import {ThemeProvider} from 'styled-components';
import {Routes} from './src/routes';
import usePersistedState from './src/utils/usePersistedState';
import {themes} from './src/global/styles';
import {Provider} from 'react-redux';
import store from './src/store';

export default function App() {
  const [theme, setTheme] = usePersistedState(
    'theme',
    Appearance.getColorScheme(),
  );

  return (
    <AppearanceProvider>
      <ThemeProvider theme={theme == 'light' ? themes.Light : themes.Dark}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={themes.statusBarColor}
        />
        <Provider store={store}>
          <Routes />
        </Provider>
      </ThemeProvider>
    </AppearanceProvider>
  );
}
