import { ref, set, get, update, remove } from 'firebase/database';
import { database } from './firebase';
import {  getProductsNeedingSync,  markProductAsSynced,  insertProduct,  updateProduct,  deleteProduct,  getAllProducts} from './database';


export const syncLocalToFirebase = async (userId) => {
  try {
    const productsToSync = await getProductsNeedingSync(userId);
    console.log(`Sincronizando ${productsToSync.length} productos a Firebase...`);

    for (const product of productsToSync) {
      const productRef = ref(database, `products/${userId}/${product.id}`);


      const { isDirty, needsSync, ...productData } = product;

      try {
        await set(productRef, productData);
        await markProductAsSynced(product.id);
        console.log(`Producto sincronizado ${product.id} a Firebase`);
      } catch (error) {
        console.error(`Error sincronizando producto ${product.id}:`, error);
      }
    }

    return { success: true, syncedCount: productsToSync.length };
  } catch (error) {
    console.error('Error sincronizando a Firebase:', error);
    return { success: false, error: error.message };
  }
};


export const syncFirebaseToLocal = async (userId) => {
  try {
    const productsRef = ref(database, `products/${userId}`);
    const snapshot = await get(productsRef);

    if (!snapshot.exists()) {
      console.log('No se encontraron productos en Firebase');
      return { success: true, syncedCount: 0 };
    }

    const firebaseProducts = snapshot.val();
    const localProducts = await getAllProducts(userId);

    const localProductsMap = {};
    localProducts.forEach(product => {
      localProductsMap[product.id] = product;
    });

    let syncedCount = 0;


    for (const [productId, firebaseProduct] of Object.entries(firebaseProducts)) {
      const localProduct = localProductsMap[productId];

      if (!localProduct) {
        await insertProduct({
          ...firebaseProduct,
          isDirty: 0,
          needsSync: 0
        });
        syncedCount++;
        console.log(`Inserted new product ${productId} from Firebase`);
      } else if (firebaseProduct.updatedAt > localProduct.updatedAt && !localProduct.isDirty) {
        await updateProduct(productId, {
          ...firebaseProduct,
          isDirty: 0,
          needsSync: 0
        });
        syncedCount++;
        console.log(`Updated product ${productId} from Firebase`);
      }
    }

    return { success: true, syncedCount };
  } catch (error) {
    console.error('Error sincronizando desde Firebase:', error);
    return { success: false, error: error.message };
  }
};


export const fullSync = async (userId) => {
  try {
    console.log('Iniciando sincronización completa');


    const uploadResult = await syncLocalToFirebase(userId);

    const downloadResult = await syncFirebaseToLocal(userId);

    return {
      success: uploadResult.success && downloadResult.success,
      uploaded: uploadResult.syncedCount,
      downloaded: downloadResult.syncedCount,
      lastSyncTime: Date.now()
    };
  } catch (error) {
    console.error('Error durante la sincronización completa:', error);
    return {
      success: false,
      error: error.message
    };
  }
};


export const deleteProductEverywhere = async (userId, productId) => {
  try {

    const productRef = ref(database, `products/${userId}/${productId}`);
    await remove(productRef);


    await deleteProduct(productId);

    return { success: true };
  } catch (error) {
    console.error('Error eliminando producto:', error);
    return { success: false, error: error.message };
  }
};
