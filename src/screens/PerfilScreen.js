import React, { useEffect } from 'react';
import {  View,  Text,  StyleSheet,  TouchableOpacity,Alert,  ActivityIndicator, 
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import { logout } from '../store/slices/authSlice';
import { setProducts } from '../store/slices/productsSlice';
import {
  setSyncing,
  setSyncSuccess,
  setSyncError,
  setPendingChanges,
} from '../store/slices/syncSlice';
import { fullSync } from '../services/syncService';
import { getProductsNeedingSync, getAllProducts } from '../services/database';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginLeft: 16,
    marginBottom: 12,
  },
  infoCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoRow: {
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  syncCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  syncStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  syncStatusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  syncStatusText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  syncInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  syncInfoLabel: {
    fontSize: 14,
    color: '#666',
  },
  syncInfoValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  syncInfoValueWarning: {
    color: '#FF9500',
  },
  errorContainer: {
    backgroundColor: '#FFEBEE',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  errorText: {
    fontSize: 12,
    color: '#C62828',
  },
  syncButton: {
    backgroundColor: '#007AFF',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  syncButtonDisabled: {
    opacity: 0.6,
  },
  syncButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  statsCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    padding: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
  },
});
