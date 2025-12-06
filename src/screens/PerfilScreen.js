import React, { useEffect } from 'react';
import {  View,  Text,  TouchableOpacity,Alert,  ActivityIndicator, 
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import { logout } from '../store/slices/authSlice';
import { setProducts } from '../store/slices/productsSlice';
import {  setSyncing,  setSyncSuccess,  setSyncError,  setPendingChanges } from '../store/slices/syncSlice';
import { fullSync } from '../services/syncService';
import { getProductsNeedingSync, getAllProducts } from '../services/database';
import { styles } from './styles/PerfilScreenStyles';

export default function PerfilScreen() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const syncState = useSelector((state) => state.sync);
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    if (user) {
      checkPendingChanges();
    }
  }, [user, products]);

  const checkPendingChanges = async () => {
    try {
      const pendingProducts = await getProductsNeedingSync(user.uid);
      dispatch(setPendingChanges(pendingProducts.length));
    } catch (error) {
      console.error('Error verificando cambios pendientes:', error);
    }
  };

  const handleSync = async () => {
    if (!user) {
      Alert.alert('Error', 'No hay usuario autenticado');
      return;
    }

    dispatch(setSyncing(true));

    try {
      const result = await fullSync(user.uid);

      if (result.success) {
        dispatch(
          setSyncSuccess({
            timestamp: result.lastSyncTime,
          })
        );


        const updatedProducts = await getAllProducts(user.uid);
        dispatch(setProducts(updatedProducts));

        Alert.alert(
          'Sincronización exitosa',
          `Subidos: ${result.uploaded}\nDescargados: ${result.downloaded}`
        );
      } else {
        dispatch(setSyncError(result.error));
        Alert.alert('Error de sincronización', result.error);
      }
    } catch (error) {
      console.error('Sync error:', error);
      dispatch(setSyncError(error.message));
      Alert.alert('Error', 'No se pudo sincronizar');
    }
  };

  const handleLogout = async () => {
    Alert.alert('Cerrar sesión', '¿Estás seguro de que quieres cerrar sesión?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Cerrar sesión',
        style: 'destructive',
        onPress: async () => {
          try {
            await signOut(auth);
            dispatch(logout());
            dispatch(setProducts([]));
          } catch (error) {
            console.error('Logout error:', error);
            Alert.alert('Error', 'No se pudo cerrar sesión');
          }
        },
      },
    ]);
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Nunca';
    const date = new Date(timestamp);
    return date.toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getSyncStatusColor = () => {
    switch (syncState.syncStatus) {
      case 'syncing':
        return '#007AFF';
      case 'success':
        return '#34C759';
      case 'error':
        return '#FF3B30';
      default:
        return '#999';
    }
  };

  const getSyncStatusText = () => {
    switch (syncState.syncStatus) {
      case 'syncing':
        return 'Sincronizando...';
      case 'success':
        return 'Sincronizado';
      case 'error':
        return 'Error';
      default:
        return 'Sin sincronizar';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Perfil</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Información del Usuario</Text>
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Correo:</Text>
            <Text style={styles.infoValue}>{user?.email}</Text>
          </View>
        </View>
      </View>

      

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Estadísticas</Text>
        <View style={styles.statsCard}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{products.length}</Text>
            <Text style={styles.statLabel}>Productos totales</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>
              {products.reduce((sum, p) => sum + (p.quantity || 0), 0)}
            </Text>
            <Text style={styles.statLabel}>Stock total</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>
              ${products.reduce((sum, p) => sum + (p.price || 0) * (p.quantity || 0), 0).toFixed(2)}
            </Text>
            <Text style={styles.statLabel}>Valor inventario</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>KHAN Stock</Text>
      </View>
    </View>
  );
}
