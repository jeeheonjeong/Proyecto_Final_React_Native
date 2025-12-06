import React, { useEffect, useCallback, useMemo } from 'react';
import {  View,  Text,  FlatList,  TextInput,  TouchableOpacity,  ActivityIndicator,  RefreshControl,  ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import {  setProducts,  setSearchQuery,  setSelectedCategory,  selectFilteredProducts,  selectCategories,  removeProduct } from '../store/slices/productsSlice';
import { getAllProducts, deleteProduct as deleteProductDB } from '../services/database';
import { deleteProductEverywhere } from '../services/syncService';
import { styles } from './styles/StockScreenStyles';

export default function StockScreen({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const searchQuery = useSelector((state) => state.products.searchQuery);
  const selectedCategory = useSelector((state) => state.products.selectedCategory);
  const filteredProducts = useSelector(selectFilteredProducts);
  const categories = useSelector(selectCategories);
  const [refreshing, setRefreshing] = React.useState(false);

  const loadProducts = useCallback(async () => {
    if (!user) return;

    try {
      const products = await getAllProducts(user.uid);
      dispatch(setProducts(products));
    } catch (error) {
      console.error('Error cargando productos:', error);
    }
  }, [user, dispatch]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadProducts();
    setRefreshing(false);
  }, [loadProducts]);

  const handleProductPress = useCallback(
    (product) => {
      navigation.navigate('Agregar', { product });
    },
    [navigation]
  );

  const handleDeleteProduct = useCallback(
    async (productId) => {
      try {
        await deleteProductEverywhere(user.uid, productId);
        dispatch(removeProduct(productId));
      } catch (error) {
        console.error('Error eliminando producto:', error);
      }
    },
    [user, dispatch]
  );

  const renderProduct = useCallback(
    ({ item }) => (
      <ProductCard
        product={item}
        onPress={handleProductPress}
        onDelete={handleDeleteProduct}
      />
    ),
    [handleProductPress, handleDeleteProduct]
  );

  const keyExtractor = useCallback((item) => item.id, []);

  const ItemSeparator = useCallback(
    () => <View style={styles.separator} />,
    []
  );

  const ListEmptyComponent = useMemo(
    () => (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No hay productos</Text>
        <Text style={styles.emptySubtext}>
          Agrega productos usando la pestaña "Agregar"
        </Text>
      </View>
    ),
    []
  );

  const ListHeaderComponent = useMemo(
    () => (
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar productos..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={(text) => dispatch(setSearchQuery(text))}
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.categoryButtonActive,
              ]}
              onPress={() => dispatch(setSelectedCategory(category))}
            >
              <Text
                style={[
                  styles.categoryButtonText,
                  selectedCategory === category && styles.categoryButtonTextActive,
                ]}
              >
                {category === 'all' ? 'Todos' : category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    ),
    [searchQuery, selectedCategory, categories, dispatch]
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Inventario</Text>
        <Text style={styles.subtitle}>{filteredProducts.length} productos</Text>
      </View>

      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={ListHeaderComponent}
        ListEmptyComponent={ListEmptyComponent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={50}
        initialNumToRender={10}
        windowSize={10}
      />
    </View>
  );
}
