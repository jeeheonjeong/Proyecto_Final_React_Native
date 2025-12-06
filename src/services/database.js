import * as SQLite from 'expo-sqlite';

let db = null;

export const initDatabase = async () => {
  try {
    db = await SQLite.openDatabaseAsync('stockManagement.db');

    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS products (
        id TEXT PRIMARY KEY,
        userId TEXT NOT NULL,
        name TEXT NOT NULL,
        category TEXT,
        quantity INTEGER DEFAULT 0,
        cost REAL DEFAULT 0,
        price REAL DEFAULT 0,
        notes TEXT,
        photoUri TEXT,
        latitude REAL,
        longitude REAL,
        createdAt INTEGER NOT NULL,
        updatedAt INTEGER NOT NULL,
        isDirty INTEGER DEFAULT 0,
        needsSync INTEGER DEFAULT 0
      );
    `);

    console.log('Base de datos inicializada correctamente');
    return db;
  } catch (error) {
    console.error('Error inicializando la base de datos:', error);
    throw error;
  }
};

export const getDatabase = () => {
  if (!db) {
    throw new Error('Base de datos no inicializada. Llame a initDatabase primero.');
  }
  return db;
};

export const insertProduct = async (product) => {
  try {
    const db = getDatabase();
    const result = await db.runAsync(
      `INSERT INTO products (
        id, userId, name, category, quantity, cost, price, notes,
        photoUri, latitude, longitude, createdAt, updatedAt, isDirty, needsSync
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        product.id,
        product.userId,
        product.name,
        product.category || '',
        product.quantity || 0,
        product.cost || 0,
        product.price || 0,
        product.notes || '',
        product.photoUri || '',
        product.latitude || null,
        product.longitude || null,
        product.createdAt,
        product.updatedAt,
        product.isDirty || 0,
        product.needsSync || 1
      ]
    );
    return result;
  } catch (error) {
    console.error('Error insertando producto:', error);
    throw error;
  }
};

export const updateProduct = async (id, updates) => {
  try {
    const db = getDatabase();
    const fields = [];
    const values = [];

    Object.keys(updates).forEach((key) => {
      if (key !== 'id') {
        fields.push(`${key} = ?`);
        values.push(updates[key]);
      }
    });

    fields.push('isDirty = ?', 'needsSync = ?', 'updatedAt = ?');
    values.push(1, 1, Date.now());
    values.push(id);

    const sql = `UPDATE products SET ${fields.join(', ')} WHERE id = ?`;
    const result = await db.runAsync(sql, values);
    return result;
  } catch (error) {
    console.error('Error actualizando producto:', error);
    throw error;
  }
};


export const deleteProduct = async (id) => {
  try {
    const db = getDatabase();
    const result = await db.runAsync('DELETE FROM products WHERE id = ?', [id]);
    return result;
  } catch (error) {
    console.error('Error eliminando producto:', error);
    throw error;
  }
};


export const getAllProducts = async (userId) => {
  try {
    const db = getDatabase();
    const products = await db.getAllAsync(
      'SELECT * FROM products WHERE userId = ? ORDER BY updatedAt DESC',
      [userId]
    );
    return products;
  } catch (error) {
    console.error('Error obteniendo productos:', error);
    throw error;
  }
};


export const getProductById = async (id) => {
  try {
    const db = getDatabase();
    const product = await db.getFirstAsync(
      'SELECT * FROM products WHERE id = ?',
      [id]
    );
    return product;
  } catch (error) {
    console.error('Error obteniendo producto:', error);
    throw error;
  }
};

export const getProductsNeedingSync = async (userId) => {
  try {
    const db = getDatabase();
    const products = await db.getAllAsync(
      'SELECT * FROM products WHERE userId = ? AND needsSync = 1',
      [userId]
    );
    return products;
  } catch (error) {
    console.error('Error obteniendo productos que necesitan sincronización:', error);
    throw error;
  }
};

export const markProductAsSynced = async (id) => {
  try {
    const db = getDatabase();
    const result = await db.runAsync(
      'UPDATE products SET isDirty = 0, needsSync = 0 WHERE id = ?',
      [id]
    );
    return result;
  } catch (error) {
    console.error('Error marcando producto como sincronizado:', error);
    throw error;
  }
};

export const searchProducts = async (userId, query) => {
  try {
    const db = getDatabase();
    const searchQuery = `%${query}%`;
    const products = await db.getAllAsync(
      'SELECT * FROM products WHERE userId = ? AND (name LIKE ? OR category LIKE ?) ORDER BY updatedAt DESC',
      [userId, searchQuery, searchQuery]
    );
    return products;
  } catch (error) {
    console.error('Error buscando productos:', error);
    throw error;
  }
};

export const clearAllProducts = async () => {
  try {
    const db = getDatabase();
    const result = await db.runAsync('DELETE FROM products');
    return result;
  } catch (error) {
    console.error('Error limpiando productos:', error);
    throw error;
  }
};
