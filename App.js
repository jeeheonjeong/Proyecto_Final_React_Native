import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { store } from './src/store/store';
import RootNavigator from './src/navigation/RootNavigator';
import { initDatabase } from './src/services/database';


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = React.useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        
        if (Platform.OS !== 'web') {
          await initDatabase();
          console.log('Base de datos inicializada');
        } else {
          console.log('Ejecutando en web - SQLite omitido');
        }
      } catch (e) {
        console.warn('No se pudo iniciar DB', e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}
