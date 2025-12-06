import React, { useState, useEffect } from 'react';
import {  View,  Text,  TextInput,  TouchableOpacity,  ScrollView,  Image,  Alert,  ActivityIndicator,  KeyboardAvoidingView,  Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { addProduct, updateProductInState } from '../store/slices/productsSlice';
import { insertProduct, updateProduct } from '../services/database';
import { styles } from './styles/AgregarScreenStyles';

export default function AgregarScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const currentLocation = useSelector((state) => state.location.currentLocation);

  const editProduct = route?.params?.product;
  const isEditing = !!editProduct;

  const [name, setName] = useState(editProduct?.name || '');
  const [category, setCategory] = useState(editProduct?.category || '');
  const [quantity, setQuantity] = useState(editProduct?.quantity?.toString() || '0');
  const [cost, setCost] = useState(editProduct?.cost?.toString() || '0');
  const [price, setPrice] = useState(editProduct?.price?.toString() || '0');
  const [notes, setNotes] = useState(editProduct?.notes || '');
  const [photoUri, setPhotoUri] = useState(editProduct?.photoUri || '');
  const [loading, setLoading] = useState(false);
  const [showCamera, setShowCamera] = useState(false);

  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [imagePermission, setImagePermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setImagePermission(status === 'granted');
    })();
  }, []);

  const handleTakePhoto = async () => {
    if (!cameraPermission) {
      const { status } = await requestCameraPermission();
      if (status !== 'granted') {
        Alert.alert('Permiso denegado', 'Se necesita acceso a la cámara');
        return;
      }
    }

    if (!cameraPermission.granted) {
      const { status } = await requestCameraPermission();
      if (status !== 'granted') {
        Alert.alert('Permiso denegado', 'Se necesita acceso a la cámara');
        return;
      }
    }

    setShowCamera(true);
  };

  const handleCameraCapture = async (camera) => {
    try {
      const photo = await camera.takePictureAsync();
      setPhotoUri(photo.uri);
      setShowCamera(false);
    } catch (error) {
      console.error('Error tomando foto:', error);
      Alert.alert('Error', 'No se pudo tomar la foto');
    }
  };

  const handlePickImage = async () => {
    if (!imagePermission) {
      Alert.alert('Permiso denegado', 'Se necesita acceso a la galería');
      return;
    }

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        setPhotoUri(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error seleccionando imagen:', error);
      Alert.alert('Error', 'No se pudo seleccionar la imagen');
    }
  };

  const handleSave = async () => {
    if (!name.trim()) {
      Alert.alert('Error', 'El nombre del producto es requerido');
      return;
    }

    setLoading(true);

    try {
      const productData = {
        id: editProduct?.id || `product_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        userId: user.uid,
        name: name.trim(),
        category: category.trim(),
        quantity: parseInt(quantity) || 0,
        cost: parseFloat(cost) || 0,
        price: parseFloat(price) || 0,
        notes: notes.trim(),
        photoUri: photoUri,
        latitude: currentLocation?.latitude || null,
        longitude: currentLocation?.longitude || null,
        createdAt: editProduct?.createdAt || Date.now(),
        updatedAt: Date.now(),
        isDirty: 1,
        needsSync: 1,
      };

      if (isEditing) {
        await updateProduct(productData.id, productData);
        dispatch(updateProductInState(productData));
        Alert.alert('Éxito', 'Producto actualizado');
      } else {
        await insertProduct(productData);
        dispatch(addProduct(productData));
        Alert.alert('Éxito', 'Producto agregado');
      }

      // Reset form
      setName('');
      setCategory('');
      setQuantity('0');
      setCost('0');
      setPrice('0');
      setNotes('');
      setPhotoUri('');

      navigation.navigate('Stock');
    } catch (error) {
      console.error('Error guardando producto:', error);
      Alert.alert('Error', 'No se pudo guardar el producto');
    } finally {
      setLoading(false);
    }
  };

  if (showCamera) {
    return (
      <View style={styles.cameraContainer}>
        <CameraView
          style={styles.camera}
          facing="back"
          ref={(ref) => {
            if (ref) {
              setTimeout(() => {
                const captureButton = (
                  <View style={styles.cameraControls}>
                    <TouchableOpacity
                      style={styles.captureButton}
                      onPress={() => handleCameraCapture(ref)}
                    >
                      <View style={styles.captureButtonInner} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.cancelButton}
                      onPress={() => setShowCamera(false)}
                    >
                      <Text style={styles.cancelButtonText}>Cancelar</Text>
                    </TouchableOpacity>
                  </View>
                );
              }, 100);
            }
          }}
        >
          <View style={styles.cameraControls}>
            <TouchableOpacity
              style={styles.captureButton}
              onPress={() => {
                const camera = showCamera;
                if (camera && camera.takePictureAsync) {
                  handleCameraCapture(camera);
                }
              }}
            >
              <View style={styles.captureButtonInner} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setShowCamera(false)}
            >
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="handled">
        <View style={styles.content}>
          <Text style={styles.title}>{isEditing ? 'Editar Producto' : 'Agregar Producto'}</Text>

          <View style={styles.photoSection}>
            {photoUri ? (
              <Image source={{ uri: photoUri }} style={styles.photo} />
            ) : (
              <View style={styles.photoPlaceholder}>
                <Text style={styles.photoPlaceholderText}>Sin foto</Text>
              </View>
            )}

            <View style={styles.photoButtons}>
              <TouchableOpacity style={styles.photoButton} onPress={handleTakePhoto}>
                <Text style={styles.photoButtonText}>Tomar Foto</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.photoButton} onPress={handlePickImage}>
                <Text style={styles.photoButtonText}>Galería</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.label}>Nombre *</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre del producto"
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Categoría</Text>
          <TextInput
            style={styles.input}
            placeholder="Categoría del producto"
            placeholderTextColor="#999"
            value={category}
            onChangeText={setCategory}
          />

          <Text style={styles.label}>Cantidad</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            placeholderTextColor="#999"
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Costo</Text>
          <TextInput
            style={styles.input}
            placeholder="0.00"
            placeholderTextColor="#999"
            value={cost}
            onChangeText={setCost}
            keyboardType="decimal-pad"
          />

          <Text style={styles.label}>Precio</Text>
          <TextInput
            style={styles.input}
            placeholder="0.00"
            placeholderTextColor="#999"
            value={price}
            onChangeText={setPrice}
            keyboardType="decimal-pad"
          />

          <Text style={styles.label}>Notas</Text>
          <TextInput
            style={[styles.input, styles.notesInput]}
            placeholder="Notas adicionales..."
            placeholderTextColor="#999"
            value={notes}
            onChangeText={setNotes}
            multiline
            numberOfLines={4}
          />

          {currentLocation && (
            <View style={styles.locationInfo}>
              <Text style={styles.locationText}>
                📍 Ubicación: {currentLocation.latitude.toFixed(6)},{' '}
                {currentLocation.longitude.toFixed(6)}
              </Text>
            </View>
          )}

          <TouchableOpacity
            style={[styles.saveButton, loading && styles.saveButtonDisabled]}
            onPress={handleSave}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.saveButtonText}>
                {isEditing ? 'Actualizar Producto' : 'Guardar Producto'}
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
