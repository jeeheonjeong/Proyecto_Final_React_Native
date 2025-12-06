import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { navigationColors } from '../styles/theme';
import StockScreen from '../screens/StockScreen';
import AgregarScreen from '../screens/AgregarScreen';
import UbicacionScreen from '../screens/UbicacionScreen';
import PerfilScreen from '../screens/PerfilScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Stock') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Agregar') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Ubicación') {
            iconName = focused ? 'location' : 'location-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: navigationColors.tabActive,
        tabBarInactiveTintColor: navigationColors.tabInactive,
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen
        name="Stock"
        component={StockScreen}
        options={{
          title: 'Stock',
        }}
      />
      <Tab.Screen
        name="Agregar"
        component={AgregarScreen}
        options={{
          title: 'Agregar',
        }}
      />
      <Tab.Screen
        name="Ubicación"
        component={UbicacionScreen}
        options={{
          title: 'Ubicación',
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          title: 'Perfil',
        }}
      />
    </Tab.Navigator>
  );
}
