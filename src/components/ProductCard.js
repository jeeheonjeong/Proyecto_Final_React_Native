import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { styles } from './ProductCardStyles';

const ProductCard = memo(({ product, onPress, onDelete }) => {
  const handleDelete = () => {
    Alert.alert(
      'Eliminar Producto',
      `¿Eliminar "${product.name}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => onDelete(product.id),
        },
      ]
    );
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const syncStatusColor = product.needsSync ? '#FF9500' : '#34C759';
  const syncStatusText = product.needsSync ? 'Sin sincronizar' : 'Sincronizado';

  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(product)}>
      <View style={styles.cardContent}>
        {product.photoUri ? (
          <Image source={{ uri: product.photoUri }} style={styles.productImage} />
        ) : (
          <View style={styles.placeholderImage}>
            <Text style={styles.placeholderText}>Sin foto</Text>
          </View>
        )}

        <View style={styles.infoContainer}>
          <Text style={styles.productName} numberOfLines={1}>
            {product.name}
          </Text>

          {product.category && (
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{product.category}</Text>
            </View>
          )}

          <View style={styles.detailsRow}>
            <Text style={styles.detailLabel}>Stock:</Text>
            <Text style={styles.detailValue}>{product.quantity}</Text>
          </View>

          <View style={styles.detailsRow}>
            <Text style={styles.detailLabel}>Precio:</Text>
            <Text style={styles.detailValue}>${product.price?.toFixed(2) || '0.00'}</Text>
          </View>

          <View style={styles.detailsRow}>
            <Text style={styles.detailLabel}>Actualizado:</Text>
            <Text style={styles.detailValueSmall}>{formatDate(product.updatedAt)}</Text>
          </View>

          <View style={[styles.syncBadge, { backgroundColor: syncStatusColor }]}>
            <Text style={styles.syncText}>{syncStatusText}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>Eliminar</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
