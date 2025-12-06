import React, { useEffect, useState } from 'react';
import {  View,  Text,  TouchableOpacity,  ActivityIndicator,  Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import {  setCurrentLocation,  setLocationPermission,  setLoading,  setError } from '../store/slices/locationSlice';
import { styles } from './styles/UbicacionScreenStyles';

const GOOGLE_MAPS_API_KEY = 'AIzaSyB59rh3HaiJmW59VxI3xQilNLmvjzYgD1U';

export default function UbicacionScreen() {
  const dispatch = useDispatch();
  const currentLocation = useSelector((state) => state.location.currentLocation);
  const products = useSelector((state) => state.products.products);
  const [loading, setLocalLoading] = useState(false);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      dispatch(setLocationPermission(status === 'granted'));

      if (status === 'granted') {
        getCurrentLocation();
      } else {
        Alert.alert(
          'Permiso denegado',
          'Se necesita permiso de ubicación para usar esta función'
        );
      }
    } catch (error) {
      console.error('Error requesting location permission:', error);
      dispatch(setError('Error al solicitar permisos de ubicación'));
    }
  };

  const getCurrentLocation = async () => {
    setLocalLoading(true);
    dispatch(setLoading(true));

    try {
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const locationData = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        timestamp: location.timestamp,
      };

      dispatch(setCurrentLocation(locationData));
      console.log('Ubicación actualizada:', locationData);
    } catch (error) {
      console.error('Error obteniendo la ubicación:', error);
      dispatch(setError('Error al obtener la ubicación'));
      Alert.alert('Error', 'No se pudo obtener la ubicación actual');
    } finally {
      setLocalLoading(false);
      dispatch(setLoading(false));
    }
  };

  const productsWithLocation = products.filter(
    (product) => product.latitude && product.longitude
  );

  const initialRegion = currentLocation
    ? {
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }
    : {
        latitude: -34.6037,
        longitude: -58.3816,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Ubicación</Text>
        <TouchableOpacity
          style={styles.refreshButton}
          onPress={getCurrentLocation}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#007AFF" size="small" />
          ) : (
            <Text style={styles.refreshButtonText}>Actualizar</Text>
          )}
        </TouchableOpacity>
      </View>

      {currentLocation && (
        <View style={styles.locationInfo}>
          <Text style={styles.locationLabel}>Ubicación Actual:</Text>
          <Text style={styles.locationText}>
            Lat: {currentLocation.latitude.toFixed(6)}
          </Text>
          <Text style={styles.locationText}>
            Long: {currentLocation.longitude.toFixed(6)}
          </Text>
        </View>
      )}

      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={initialRegion}
          region={
            currentLocation
              ? {
                  latitude: currentLocation.latitude,
                  longitude: currentLocation.longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }
              : undefined
          }
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
          {currentLocation && (
            <Marker
              coordinate={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
              }}
              title="Mi ubicación"
              description="Ubicación actual"
              pinColor="blue"
            />
          )}

          {productsWithLocation.map((product) => (
            <Marker
              key={product.id}
              coordinate={{
                latitude: product.latitude,
                longitude: product.longitude,
              }}
              title={product.name}
              description={`Stock: ${product.quantity} | $${product.price}`}
              pinColor="red"
            />
          ))}
        </MapView>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Productos con ubicación</Text>
        <Text style={styles.infoText}>
          {productsWithLocation.length} de {products.length} productos tienen ubicación
          registrada
        </Text>
        <Text style={styles.infoSubtext}>
          Los marcadores rojos representan productos con ubicación guardada
        </Text>
      </View>
    </View>
  );
}
