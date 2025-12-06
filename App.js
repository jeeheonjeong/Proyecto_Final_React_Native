import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, View, Text, StyleSheet } from 'react-native';
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

const styles = StyleSheet.create({
  webContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  webCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 40,
    maxWidth: 600,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  webTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  webText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
    lineHeight: 26,
  },
  webSubtext: {
    fontSize: 16,
    color: '#666',
    marginTop: 20,
    marginBottom: 12,
    fontWeight: '600',
  },
  webList: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  webListItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    lineHeight: 24,
  },
  featuresBox: {
    backgroundColor: '#E3F2FD',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1976D2',
    marginBottom: 12,
  },
  featureItem: {
    fontSize: 15,
    color: '#333',
    marginBottom: 6,
    lineHeight: 22,
  },
  webCommand: {
    fontSize: 16,
    fontFamily: Platform.OS === 'web' ? 'monospace' : 'Courier',
    color: '#007AFF',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    textAlign: 'center',
    marginTop: 10,
  },
});
