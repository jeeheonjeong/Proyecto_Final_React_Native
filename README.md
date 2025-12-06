# 📱 KHAN Stock - Aplicación de Gestión de Inventario

Una aplicación móvil completa y moderna para la gestión integral de inventario, construida con **React Native** y **Expo**. Diseñada para pequeñas y medianas empresas que necesitan controlar su inventario de forma eficiente, con funcionamiento completo tanto en línea como sin conexión a Internet.

## 🎯 Descripción del Proyecto

**KHAN Stock** es una solución integral de gestión de inventario que permite a los usuarios:
- ✅ **Gestionar productos** con información completa (nombre, categoría, cantidad, costos, precios, notas)
- 📷 **Capturar fotos** de productos con la cámara o galería del dispositivo
- 📍 **Registrar ubicaciones GPS** automáticamente para cada producto
- 🗺️ **Visualizar productos en mapas** interactivos con Google Maps
- ☁️ **Sincronizar automáticamente** con Firebase Realtime Database
- 📱 **Trabajar sin conexión** con almacenamiento local SQLite y sincronización diferida
- 🎨 **Interfaz moderna** con sistema de diseño centralizado y componentes reutilizables

## ✨ Características Principales

### 🔐 Autenticación y Seguridad
- ✅ Sistema de registro con validación de email y contraseña
- ✅ Inicio de sesión seguro con Firebase Authentication
- ✅ Sesión persistente utilizando Redux
- ✅ Protección de rutas y navegación condicional
- ✅ Variables de entorno para proteger API keys

### 📦 Gestión Completa de Productos
- ➕ **Crear** nuevos productos con campos completos (nombre, categoría, cantidad, costo, precio, notas)
- 📋 **Listar** productos en vista de tarjetas optimizada
- ✏️ **Editar** información mediante navegación táctil
- 🗑️ **Eliminar** productos con confirmación (deslizar para borrar)
- 🔍 **Buscar** productos en tiempo real
- 🏷️ **Filtrar** por categorías dinámicas
- 🔄 **Actualizar** lista con gesto pull-to-refresh

### 📷 Captura de Imágenes
- 📸 Tomar fotos en tiempo real con la cámara
- 🖼️ Seleccionar imágenes desde la galería del dispositivo
- 🔧 Edición básica con recorte y ajuste de calidad
- 💾 Almacenamiento local y optimización automática
- ☁️ Sincronización de URIs con Firebase

### 📍 Geolocalización Inteligente
- 🌍 Captura automática de coordenadas GPS al crear productos
- 📌 Precisión configurable para diferentes necesidades
- 🗺️ Visualización en Google Maps con marcadores personalizados
- 📊 Vista de región inicial configurable (Buenos Aires por defecto)
- 🧭 Actualización de ubicación en tiempo real

### 🗺️ Sistema de Mapas
- 🌎 Integración completa con Google Maps (react-native-maps)
- 📍 Marcadores interactivos para cada producto con ubicación
- 🎨 Marcadores personalizados con información del producto
- 🔍 Zoom y navegación fluida
- 📱 Responsive y optimizado para dispositivos móviles

### 🔄 Sincronización Bidireccional Offline-First
- 📴 **Funcionalidad completa sin Internet** - SQLite como base de datos local
- ☁️ **Sincronización automática** con Firebase Realtime Database
- 🔁 **Sincronización bidireccional** (local → Firebase y Firebase → local)
- ⚡ **Sistema de cola** para cambios pendientes
- 🎯 **Resolución de conflictos** automática (última modificación prevalece)
- 📊 **Indicadores visuales** de estado de sincronización
- 🔔 **Marcadores de sincronización** (isDirty, needsSync flags)

### 👤 Perfil de Usuario
- 📝 Información de cuenta
- 🔄 Estado de sincronización en tiempo real
- 🎨 Interfaz personalizada
- 🚪 Cerrar sesión con limpieza de estado

## 🛠️ Stack Tecnológico

### Frontend y Framework
```
React Native 0.81.4       - Framework multiplataforma para iOS y Android
Expo ~54.0                - Plataforma de desarrollo y compilación
React 19.1.0              - Librería de componentes UI
```

### Navegación
```
React Navigation 7.0      - Sistema de navegación
  - Native Stack          - Navegación por pilas
  - Bottom Tabs           - Pestañas inferiores
```

### Gestión de Estado
```
Redux Toolkit 2.5.0       - Gestión centralizada de estado
react-redux 9.1.0         - Conectores React-Redux
Slices:
  - authSlice             - Autenticación de usuario
  - productsSlice         - Gestión de productos
  - locationSlice         - Ubicaciones GPS
  - syncSlice             - Estado de sincronización
```

### Base de Datos y Backend
```
Firebase 11.1.0           - Suite completa de backend
  - Authentication        - Sistema de autenticación
  - Realtime Database     - Base de datos en tiempo real
  
expo-sqlite 15.0.0        - Base de datos local SQLite
  - Almacenamiento offline persistente
  - Tablas normalizadas
  - Sistema de flags de sincronización
```

### Funcionalidades Nativas (Expo SDK)
```
expo-camera 17.0.0        - Acceso a cámara del dispositivo
expo-location 18.0.0      - Servicios GPS y geolocalización
expo-image-picker 16.0.0  - Selección de imágenes de galería
expo-file-system 18.0.0   - Sistema de archivos nativo
expo-constants 18.0.0     - Constantes del dispositivo
expo-status-bar 3.0.0     - Control de barra de estado
expo-splash-screen 31.0.0 - Pantalla de inicio
```

### Mapas y Ubicación
```
react-native-maps 1.18.0  - Integración Google Maps
  - Marcadores personalizados
  - Regiones y zoom
  - Geolocalización en mapa
```

### UI y Experiencia de Usuario
```
@expo/vector-icons 15.0   - Biblioteca de iconos (Ionicons)
react-native-reanimated 4.1 - Animaciones de alto rendimiento
react-native-gesture-handler 2.28 - Gestos táctiles
react-native-safe-area-context 5.6 - Áreas seguras
react-native-screens 4.16 - Optimización de pantallas
```

### Configuración y Variables de Entorno
```
react-native-dotenv 3.4.11 - Variables de entorno
dotenv 17.2.3             - Carga de archivos .env
  - Protección de API keys
  - Configuración por entorno
```

## 📂 Estructura del Proyecto

```
Proyecto_Final_React_Native/
│
├── 📱 App.js                    # Componente principal de la aplicación
├── 📱 index.js                  # Punto de entrada
├── ⚙️ app.config.js             # Configuración Expo (usa variables de entorno)
├── ⚙️ babel.config.js           # Configuración Babel + react-native-dotenv
├── 📦 package.json              # Dependencias y scripts npm
├── 🔧 eas.json                  # Configuración Expo Application Services
├── 🔐 .env                      # Variables de entorno (NO incluido en repo)
├── 📄 .env.example              # Plantilla para variables de entorno
│
├── 📁 src/
│   │
│   ├── 📁 components/           # Componentes reutilizables
│   │   ├── ProductCard.js       # Tarjeta de producto con imagen y detalles
│   │   └── ProductCardStyles.js # Estilos del ProductCard
│   │
│   ├── 📁 screens/              # Pantallas de la aplicación
│   │   ├── LoginScreen.js       # 🔐 Inicio de sesión
│   │   ├── RegisterScreen.js    # 📝 Registro de usuarios
│   │   ├── StockScreen.js       # 📦 Lista de productos + búsqueda + filtros
│   │   ├── AgregarScreen.js     # ➕ Agregar/editar productos + cámara
│   │   ├── UbicacionScreen.js   # 🗺️ Mapa con ubicaciones de productos
│   │   ├── PerfilScreen.js      # 👤 Perfil y configuración
│   │   │
│   │   └── 📁 styles/           # Estilos organizados por pantalla
│   │       ├── LoginScreenStyles.js
│   │       ├── RegisterScreenStyles.js
│   │       ├── StockScreenStyles.js
│   │       ├── AgregarScreenStyles.js
│   │       ├── UbicacionScreenStyles.js
│   │       └── PerfilScreenStyles.js
│   │
│   ├── 📁 styles/               # Sistema de diseño centralizado
│   │   └── theme.js             # 🎨 Colores, espaciado, tipografía, sombras
│   │
│   ├── 📁 navigation/           # Configuración de navegación
│   │   ├── RootNavigator.js     # Navegador raíz (Auth vs Main)
│   │   ├── AuthNavigator.js     # Stack de autenticación (Login/Register)
│   │   └── MainTabNavigator.js  # Bottom Tabs (Stock/Agregar/Ubicación/Perfil)
│   │
│   ├── 📁 services/             # Servicios y lógica de negocio
│   │   ├── firebase.js          # ☁️ Configuración Firebase (usa @env)
│   │   ├── database.js          # 💾 Operaciones SQLite (CRUD completo)
│   │   └── syncService.js       # 🔄 Sincronización bidireccional
│   │
│   └── 📁 store/                # Redux Toolkit Store
│       ├── store.js             # Configuración del store Redux
│       └── 📁 slices/
│           ├── authSlice.js     # Estado de autenticación (user, isAuthenticated)
│           ├── productsSlice.js # Productos (lista, búsqueda, filtros, categorías)
│           ├── syncSlice.js     # Estado de sincronización (isSyncing, lastSync)
│           └── locationSlice.js # Ubicación actual (latitude, longitude)
│
└── 📁 assets/                   # Recursos estáticos
    └── 📁 images/               # Imágenes y logo
        └── icon.png             # Icono de la aplicación
```

### 🎯 Detalles Clave de la Arquitectura

#### Sistema de Estilos
- **`src/styles/theme.js`**: Sistema de diseño centralizado exportando:
  - `colors`: Paleta de 24+ colores organizados (UI, backgrounds, text, status)
  - `spacing`: Sistema de espaciado (xs, sm, md, lg, xl, xxl)
  - `borderRadius`: Valores de bordes redondeados
  - `shadows`: Sombras predefinidas para elevación
  - `typography`: Estilos de texto reutilizables
  - `navigationColors`: Colores de navegación consistentes
  - `commonStyles`: Patrones comunes (containers, cards, buttons, inputs)

#### Servicios de Datos
- **`database.js`**: Capa de abstracción SQLite con operaciones:
  - `initDatabase()`: Inicialización y creación de tablas
  - CRUD completo: `insertProduct`, `updateProduct`, `deleteProduct`, `getAllProducts`
  - Helpers de sincronización: `getProductsNeedingSync`, `markProductAsSynced`
  
- **`syncService.js`**: Orquestador de sincronización:
  - `syncLocalToFirebase()`: Sube cambios locales pendientes
  - `syncFirebaseToLocal()`: Descarga cambios remotos
  - `deleteProductEverywhere()`: Eliminación en ambas bases de datos

#### Gestión de Estado Redux
- **authSlice**: `setUser`, `logout`, estado de autenticación
- **productsSlice**: CRUD local, búsqueda, filtros, selectores memoizados
- **locationSlice**: Ubicación GPS actual del dispositivo
- **syncSlice**: Estado y timestamps de sincronización

## 🚀 Guía de Instalación y Configuración

### 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** v18+ (verificar: `node -v`)
- **npm** v8+ (verificar: `npm -v`)
- **Git** para clonar el repositorio
- **Expo Go** en tu dispositivo móvil ([iOS](https://apps.apple.com/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))
- **Cuenta de Firebase** (gratis en [Firebase Console](https://console.firebase.google.com))
- **API Key de Google Maps** ([Google Cloud Console](https://console.cloud.google.com))

### 🔧 Instalación Paso a Paso

#### 1️⃣ Clonar el Repositorio

```bash
git clone https://github.com/jeeheonjeong/Proyecto_Final_React_Native.git
cd Proyecto_Final_React_Native
```

#### 2️⃣ Instalar Dependencias

```bash
npm install
```

O si prefieres Yarn:

```bash
yarn install
```

#### 3️⃣ Configurar Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Crea un nuevo proyecto o usa uno existente
3. En "Project Settings" > "General", crea una app web
4. Habilita **Authentication** (Email/Password)
5. Habilita **Realtime Database**
6. Configura las reglas de seguridad:

```json
{
  "rules": {
    "products": {
      "$userId": {
        ".read": "$userId === auth.uid",
        ".write": "$userId === auth.uid"
      }
    }
  }
}
```

#### 4️⃣ Configurar Google Maps

1. Ve a [Google Cloud Console](https://console.cloud.google.com)
2. Crea o selecciona un proyecto
3. Habilita **Maps SDK for Android** y **Maps SDK for iOS**
4. Ve a **APIs & Services** > **Credentials**
5. Crea una **API Key** y restringe por app si es necesario

#### 5️⃣ Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```bash
# Windows PowerShell
Copy-Item .env.example .env

# Linux/Mac
cp .env.example .env
```

Edita `.env` con tus credenciales:

```env
# Firebase Configuration
FIREBASE_API_KEY=tu_api_key_de_firebase
FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
FIREBASE_PROJECT_ID=tu_proyecto_id
FIREBASE_STORAGE_BUCKET=tu_proyecto.appspot.com
FIREBASE_MESSAGING_SENDER_ID=123456789012
FIREBASE_APP_ID=1:123456789012:web:abcdef123456
FIREBASE_DATABASE_URL=https://tu_proyecto.firebaseio.com

# Google Maps
GOOGLE_MAPS_API_KEY=tu_google_maps_api_key
```

> ⚠️ **IMPORTANTE**: El archivo `.env` está en `.gitignore` y NO se subirá al repositorio. Nunca compartas tus API keys públicamente.

### ▶️ Ejecutar la Aplicación

#### Opción 1: Desarrollo con Expo Go (Recomendado)

```bash
npm start
```

Verás un menú interactivo en la terminal:

```
› Metro waiting on exp://192.168.x.x:8081
› Scan the QR code with Expo Go (Android) or Camera app (iOS)

› Press a │ open Android
› Press i │ open iOS simulator  
› Press w │ open web

› Press r │ reload app
› Press m │ toggle menu
› Press j │ open debugger
```

**En tu dispositivo móvil:**
1. Abre **Expo Go**
2. Escanea el código QR mostrado en la terminal
3. La app se cargará automáticamente

#### Opción 2: Emulador Android (Windows/Mac/Linux)

```bash
npm run android
```

Requisitos:
- Android Studio instalado
- Android SDK configurado
- Emulador de Android en ejecución

#### Opción 3: Simulador iOS (Solo macOS)

```bash
npm run ios
```

Requisitos:
- Xcode instalado (desde App Store)
- Herramientas de línea de comandos de Xcode

### 🔄 Limpiar Caché (Si hay problemas)

```bash
npm start -- --clear
```

O eliminar completamente:

```bash
# Eliminar node_modules y caché
rm -rf node_modules
npm cache clean --force
npm install
npx expo start --clear
```

## 📖 Guía de Uso de la Aplicación

### 1️⃣ Autenticación

#### Registro de Nuevo Usuario
1. Al abrir la app, tap en **"¿No tienes cuenta? Regístrate"**
2. Ingresa tu email y contraseña (mínimo 6 caracteres)
3. Confirma la contraseña
4. Tap en **"Registrarse"**
5. Automáticamente iniciarás sesión

#### Inicio de Sesión
1. Ingresa tu email y contraseña
2. Tap en **"Iniciar Sesión"**
3. Tu sesión quedará guardada hasta que cierres sesión manualmente

### 2️⃣ Gestión de Productos (Pantalla Stock)

#### Ver Lista de Productos
- La pantalla principal muestra todos tus productos en tarjetas
- Cada tarjeta muestra: foto, nombre, categoría, cantidad, precio
- Desliza hacia abajo para actualizar (pull-to-refresh)

#### Buscar Productos
- Usa la barra de búsqueda en la parte superior
- Busca por nombre o categoría en tiempo real

#### Filtrar por Categoría
- Tap en los botones de categoría debajo de la búsqueda
- Tap en **"Todas"** para ver todos los productos

#### Editar Producto
- Tap sobre cualquier tarjeta de producto
- Se abrirá el formulario con los datos precargados
- Modifica los campos necesarios
- Tap en **"Actualizar Producto"**

#### Eliminar Producto
- Desliza la tarjeta hacia la izquierda
- Confirma la eliminación
- El producto se eliminará de SQLite y Firebase

### 3️⃣ Agregar Productos (Pantalla Agregar)

#### Crear Nuevo Producto
1. Tap en la pestaña **"Agregar"**
2. Completa el formulario:
   - **Nombre**: Nombre del producto (requerido)
   - **Categoría**: Tipo o clasificación
   - **Cantidad**: Stock disponible
   - **Costo**: Precio de compra
   - **Precio**: Precio de venta
   - **Notas**: Información adicional

3. **Agregar Foto** (opcional):
   - Tap en **"Tomar Foto"** → Se abre la cámara
   - Tap en **"Seleccionar de Galería"** → Abre tu galería
   - La foto se muestra en la vista previa

4. **Ubicación GPS** (automática):
   - La ubicación se captura automáticamente al guardar
   - Requiere permisos de ubicación activados

5. Tap en **"Guardar Producto"**

### 4️⃣ Visualización en Mapa (Pantalla Ubicación)

#### Ver Productos en el Mapa
- Cada producto con ubicación aparece como un marcador en el mapa
- El mapa inicia centrado en Buenos Aires, Argentina
- Usa gestos para:
  - **Zoom**: Pellizcar o doble tap
  - **Mover**: Arrastrar con un dedo
  - **Rotar**: Rotar con dos dedos (en algunos dispositivos)

#### Interactuar con Marcadores
- Tap sobre un marcador para ver información del producto
- Los marcadores muestran el nombre del producto

### 5️⃣ Perfil y Configuración (Pantalla Perfil)

#### Ver Información
- Email de la cuenta
- Estado de sincronización
- Última fecha de sincronización

#### Cerrar Sesión
- Tap en **"Cerrar Sesión"**
- Se limpiará el estado de Redux
- Volverás a la pantalla de login

### 🔄 Sistema de Sincronización Automática

#### Cómo Funciona
1. **Con Internet**:
   - Todos los cambios se sincronizan automáticamente con Firebase
   - Los datos se guardan simultáneamente en SQLite y Firebase

2. **Sin Internet**:
   - Los cambios se guardan localmente en SQLite
   - Se marcan con flags `needsSync` y `isDirty`
   - Cuando se recupera Internet, se sincronizan automáticamente

3. **Indicadores**:
   - ✅ Verde: Sincronizado correctamente
   - 🔄 Amarillo: Sincronizando...
   - ❌ Rojo: Error de sincronización

#### Resolución de Conflictos
- Si el mismo producto se modifica en dos dispositivos, prevalece la última modificación (timestamp más reciente)

## 🔄 Arquitectura del Sistema de Sincronización

### Diagrama de Flujo

```
┌─────────────────────────────────────────────────────────┐
│              APLICACIÓN REACT NATIVE                    │
│                                                          │
│  ┌──────────────┐         ┌──────────────┐             │
│  │   UI Layer   │ ←────→  │ Redux Store  │             │
│  │  (Screens)   │         │   (State)    │             │
│  └──────────────┘         └──────────────┘             │
│         │                        │                      │
│         └────────────┬───────────┘                      │
│                      ↓                                  │
│            ┌──────────────────┐                         │
│            │   Services Layer │                         │
│            └──────────────────┘                         │
│              │              │                           │
│              ↓              ↓                           │
│    ┌──────────────┐  ┌─────────────┐                   │
│    │   database   │  │ syncService │                   │
│    │  (SQLite)    │  │  (Firebase) │                   │
│    └──────────────┘  └─────────────┘                   │
└─────────────┬──────────────┬─────────────────────────┬─┘
              │              │                         │
              ↓              ↓                         │
    ┌─────────────────┐  ┌──────────────┐            │
    │  SQLite Local   │  │   Firebase   │            │
    │    Database     │  │   Realtime   │            │
    │  (Offline-First)│  │   Database   │            │
    └─────────────────┘  └──────────────┘            │
              ↑              ↑                         │
              │              │                         │
              └──────────────┴─────────────────────────┘
                   Sincronización Bidireccional
```

### Flujo de Operaciones CRUD

#### ➕ Crear Producto

```
Usuario crea producto
    ↓
1. Se genera ID único
2. Se captura ubicación GPS actual
3. Se agrega timestamp (createdAt, updatedAt)
    ↓
4. Se guarda en SQLite con flags:
   - needsSync = 1
   - isDirty = 1
    ↓
5. Se actualiza Redux Store (UI refleja cambio inmediato)
    ↓
¿Hay conexión a Internet?
    ├─ SÍ  → 6a. Se envía a Firebase
    │        7a. Se marca needsSync = 0, isDirty = 0
    └─ NO  → 6b. Queda marcado para sincronización futura
             7b. Se sincronizará automáticamente cuando haya Internet
```

#### ✏️ Actualizar Producto

```
Usuario edita producto
    ↓
1. Se actualiza updatedAt timestamp
2. Se marca needsSync = 1, isDirty = 1
    ↓
3. Se actualiza en SQLite
4. Se actualiza Redux Store (UI refleja cambio)
    ↓
¿Hay conexión?
    ├─ SÍ  → Se sincroniza a Firebase
    └─ NO  → Queda pendiente de sincronización
```

#### 🗑️ Eliminar Producto

```
Usuario elimina producto
    ↓
1. Se elimina de SQLite
2. Se elimina de Redux Store
    ↓
¿Hay conexión?
    ├─ SÍ  → Se elimina de Firebase inmediatamente
    └─ NO  → Se elimina solo localmente
             (Firebase se actualizará en la próxima sincronización completa)
```

### 🔄 Sincronización Bidireccional

#### Local → Firebase (Subir Cambios)

```javascript
// syncService.js - syncLocalToFirebase()

1. Buscar productos con needsSync = 1 en SQLite
2. Para cada producto pendiente:
   a. Subir a Firebase (set)
   b. Si éxito: marcar needsSync = 0, isDirty = 0
   c. Si falla: mantener flags, reintentar después
3. Retornar estadísticas (productos sincronizados)
```

#### Firebase → Local (Descargar Cambios)

```javascript
// syncService.js - syncFirebaseToLocal()

1. Obtener todos los productos de Firebase
2. Obtener todos los productos locales de SQLite
3. Comparar timestamps (updatedAt):
   
   Para cada producto en Firebase:
     ¿Existe en SQLite?
       ├─ SÍ → Comparar updatedAt
       │        └─ Si Firebase más reciente → Actualizar SQLite
       └─ NO → Insertar en SQLite (nuevo producto)
   
   Para cada producto en SQLite:
     ¿Existe en Firebase?
       └─ NO → Subir a Firebase (producto local no sincronizado)
```

### ⚙️ Resolución de Conflictos

**Estrategia: Última Modificación Gana (Last-Write-Wins)**

```
Conflicto:
- Producto editado en Dispositivo A (timestamp: 1000)
- Mismo producto editado en Dispositivo B (timestamp: 1200)

Resolución:
1. Comparar updatedAt timestamps
2. El timestamp mayor (1200) prevalece
3. Dispositivo A recibe la actualización de B en la próxima sincronización
```

### 🔔 Estados de Sincronización

| Estado | isDirty | needsSync | Significado |
|--------|---------|-----------|-------------|
| 🟢 Sincronizado | 0 | 0 | Producto idéntico en SQLite y Firebase |
| 🟡 Pendiente | 1 | 1 | Cambio local esperando sincronización |
| 🔄 Sincronizando | 1 | 1 | Enviando cambios a Firebase |
| ❌ Error | 1 | 1 | Fallo en sincronización (se reintenta) |

## 🔐 Seguridad y Mejores Prácticas

### 🛡️ Protección de Credenciales

#### Variables de Entorno
Todas las API keys y credenciales sensibles están protegidas mediante variables de entorno:

```bash
# .env (NO incluido en el repositorio)
FIREBASE_API_KEY=tu_clave_secreta
FIREBASE_AUTH_DOMAIN=...
GOOGLE_MAPS_API_KEY=...
```

**⚠️ Importante**:
- ✅ `.env` está en `.gitignore` y nunca se sube al repositorio
- ✅ `.env.example` proporciona una plantilla para otros desarrolladores
- ✅ Las variables se cargan mediante `react-native-dotenv` y `dotenv`
- ✅ En producción, usa variables de entorno de EAS Build

#### Configuración de Firebase

```javascript
// src/services/firebase.js
import { FIREBASE_API_KEY, ... } from '@env';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,  // ✅ Desde variable de entorno
  // NO hardcodear: apiKey: "AIzaSy..." ❌
};
```

### 🔒 Reglas de Seguridad Firebase

#### Realtime Database
```json
{
  "rules": {
    "products": {
      "$userId": {
        ".read": "$userId === auth.uid",
        ".write": "$userId === auth.uid"
      }
    }
  }
}
```

**Explicación**:
- Cada usuario solo puede leer/escribir sus propios productos
- `$userId` debe coincidir con el UID del usuario autenticado
- Previene acceso no autorizado a datos de otros usuarios

#### Firebase Storage (si se implementa)
```json
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /users/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 🔐 Autenticación

#### Validaciones Implementadas
```javascript
// Validación de email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  // Error: Email inválido
}

// Validación de contraseña
if (password.length < 6) {
  // Error: Contraseña debe tener mínimo 6 caracteres
}

// Confirmación de contraseña
if (password !== confirmPassword) {
  // Error: Las contraseñas no coinciden
}
```

#### Gestión Segura de Sesión
```javascript
// Redux persiste el estado de autenticación
// Pero el token JWT se maneja automáticamente por Firebase
// No se almacenan contraseñas en ningún lugar de la app
```

### 📱 Permisos del Dispositivo

#### Solicitud Correcta de Permisos
```javascript
// ✅ CORRECTO: Solicitar antes de usar
const { status } = await Camera.requestCameraPermissionsAsync();
if (status === 'granted') {
  // Usar cámara
} else {
  // Mostrar mensaje explicativo
}

// ❌ INCORRECTO: Asumir que hay permisos
const photo = await camera.takePictureAsync(); // Puede fallar
```

#### Permisos Requeridos

**Android** (`app.config.js`):
```javascript
permissions: [
  "android.permission.CAMERA",
  "android.permission.READ_EXTERNAL_STORAGE",
  "android.permission.WRITE_EXTERNAL_STORAGE",
  "android.permission.ACCESS_FINE_LOCATION",
  "android.permission.ACCESS_COARSE_LOCATION"
]
```

**iOS** (`app.config.js`):
```javascript
infoPlist: {
  NSCameraUsageDescription: "Esta app necesita acceso a la cámara...",
  NSPhotoLibraryUsageDescription: "Esta app necesita acceso a fotos...",
  NSLocationWhenInUseUsageDescription: "Esta app necesita tu ubicación..."
}
```

### 🔍 Validación de Datos

#### En el Cliente
```javascript
// Validar antes de enviar a Firebase
const validateProduct = (product) => {
  if (!product.name || product.name.trim() === '') {
    throw new Error('El nombre es obligatorio');
  }
  if (product.quantity < 0) {
    throw new Error('La cantidad no puede ser negativa');
  }
  if (product.price < 0) {
    throw new Error('El precio no puede ser negativo');
  }
};
```

#### En el Servidor (Firebase Functions - opcional)
```javascript
// functions/index.js
exports.validateProduct = functions.database
  .ref('/products/{userId}/{productId}')
  .onWrite((change, context) => {
    const product = change.after.val();
    
    if (!product.name || product.quantity < 0) {
      return change.after.ref.remove(); // Eliminar dato inválido
    }
    
    return null;
  });
```

### 🚫 Prevención de Ataques Comunes

#### Inyección SQL (SQLite)
```javascript
// ✅ CORRECTO: Uso de placeholders
await db.runAsync(
  'INSERT INTO products (name, price) VALUES (?, ?)',
  [name, price]
);

// ❌ INCORRECTO: Concatenación de strings
await db.runAsync(
  `INSERT INTO products (name, price) VALUES ('${name}', ${price})`
);
```

#### XSS (Cross-Site Scripting)
React Native automáticamente escapa el contenido, pero siempre valida:
```javascript
// Sanitizar input de usuario
const sanitizeInput = (input) => {
  return input.trim().replace(/[<>]/g, '');
};
```

### 🔑 Mejores Prácticas de Seguridad

#### ✅ Implementadas en el Proyecto

1. **Variables de entorno** para API keys
2. **Autenticación Firebase** con email/password
3. **Reglas de seguridad** en Realtime Database
4. **Validación de inputs** en formularios
5. **Placeholders SQL** para prevenir inyección
6. **Permisos solicitados** de forma explícita
7. **`.gitignore`** para archivos sensibles
8. **Estado Redux** para gestión segura de sesión

#### 🔒 Recomendaciones Adicionales para Producción

1. **Habilitar App Check** en Firebase para prevenir abuso de API
2. **Implementar rate limiting** en llamadas a Firebase
3. **Usar HTTPS** siempre (Firebase lo hace por defecto)
4. **Implementar 2FA** (autenticación de dos factores) si es crítico
5. **Encriptar datos sensibles** antes de guardar en SQLite
6. **Implementar certificado SSL pinning** para prevenir MITM
7. **Ofuscar código** en producción con ProGuard (Android) y BitCode (iOS)
8. **Implementar logs de auditoría** para acciones críticas

### 📋 Checklist de Seguridad

Antes de lanzar a producción:

- [ ] Todas las API keys en variables de entorno
- [ ] Reglas de Firebase correctamente configuradas
- [ ] Permisos de dispositivo solicitados apropiadamente
- [ ] Validación de inputs implementada
- [ ] Manejo de errores sin exponer información sensible
- [ ] HTTPS habilitado en todas las conexiones
- [ ] Logs de errores no contienen información sensible
- [ ] `.env` en `.gitignore`
- [ ] Código ofuscado para producción
- [ ] Certificados de producción configurados

## 🐛 Solución de Problemas Comunes

### ⚠️ Problemas de Conexión y Sincronización

#### Error: "Component auth has not been registered"
**Causa**: Firebase no está inicializado correctamente

**Solución**:
```bash
# 1. Verifica que .env existe y tiene las variables correctas
cat .env

# 2. Limpia caché y reinstala
rm -rf node_modules
npm install
npm start -- --clear
```

#### Error: "Failed to download remote update"
**Causa**: Caché corrupta de Expo

**Solución**:
```bash
# Cierra completamente Expo Go en el dispositivo
# Limpia caché
npx expo start --clear

# Si persiste, reinicia Metro bundler
npx expo start -c
```

### 📷 Problemas con Cámara e Imágenes

#### Las imágenes no se cargan o aparecen rotas
**Causa**: Permisos no otorgados o URIs inválidas

**Solución**:
1. **Android**: 
   - Ve a Configuración > Apps > Expo Go > Permisos
   - Activa Cámara y Almacenamiento

2. **iOS**:
   - Configuración > Expo Go > Permisos
   - Activa Cámara y Fotos

3. **Código**: Reinicia la app para que solicite permisos nuevamente

#### Error: "Camera permission not granted"
**Solución**:
```javascript
// La app solicita permisos automáticamente
// Si los rechazaste, debes ir a configuración del dispositivo
// y activarlos manualmente
```

### 🗺️ Problemas con Google Maps

#### El mapa no se muestra o aparece gris
**Causa**: API Key inválida o sin permisos

**Solución**:
1. Verifica que `GOOGLE_MAPS_API_KEY` en `.env` es correcta
2. En Google Cloud Console:
   - Verifica que Maps SDK está habilitado
   - Verifica que la API Key tiene restricciones correctas
   - Si es necesario, crea una nueva API Key sin restricciones para testing

```bash
# Limpia caché después de cambiar .env
npx expo start --clear
```

#### Error: "Location permission denied"
**Solución**:
- **Android**: Configuración > Apps > Expo Go > Permisos > Ubicación > Permitir siempre
- **iOS**: Configuración > Expo Go > Ubicación > Siempre o Mientras se usa

### 💾 Problemas con Base de Datos

#### Los productos no se guardan
**Causa**: Base de datos SQLite no inicializada

**Solución**:
```bash
# Verifica logs en la consola
# Deberías ver: "Base de datos inicializada correctamente"

# Si no aparece, reinstala expo-sqlite
npm uninstall expo-sqlite
npm install expo-sqlite@~15.0.0
npx expo start --clear
```

#### La sincronización no funciona
**Causa**: Problemas de conexión o reglas de Firebase

**Solución**:
1. Verifica conexión a Internet
2. En Firebase Console:
   - Realtime Database > Reglas
   - Asegúrate que las reglas permiten lectura/escritura:

```json
{
  "rules": {
    "products": {
      "$userId": {
        ".read": "$userId === auth.uid",
        ".write": "$userId === auth.uid"
      }
    }
  }
}
```

3. Verifica que el usuario está autenticado:
```javascript
// En la consola de Expo debería aparecer:
// "Usuario: tu-email@ejemplo.com"
```

### 🔐 Problemas de Autenticación

#### Error: "auth/invalid-email"
**Solución**: Verifica que el email tiene formato válido (contiene @ y dominio)

#### Error: "auth/weak-password"
**Solución**: La contraseña debe tener mínimo 6 caracteres

#### Error: "auth/email-already-in-use"
**Solución**: Usa la pantalla de Login en lugar de Registro

#### Error: "auth/user-not-found" o "auth/wrong-password"
**Solución**: Verifica credenciales o regístrate nuevamente

### 📱 Problemas de Rendimiento

#### La app se congela o va lenta
**Solución**:
1. Cierra todas las apps en segundo plano
2. Limpia caché de Expo Go:
   - **Android**: Configuración > Apps > Expo Go > Almacenamiento > Limpiar caché
   - **iOS**: Desinstala y reinstala Expo Go

3. Reinicia Metro bundler:
```bash
npx expo start --clear
```

#### Uso excesivo de memoria
**Solución**:
- Limita la cantidad de productos cargados simultáneamente
- Las imágenes se optimizan automáticamente, pero puedes reducir calidad en `expo-image-picker` (quality: 0.5)

### 🔧 Problemas de Variables de Entorno

#### Error: "Cannot find module '@env'"
**Causa**: react-native-dotenv no instalado o mal configurado

**Solución**:
```bash
# Instala la dependencia
npm install react-native-dotenv

# Verifica babel.config.js tiene:
# plugins: [['module:react-native-dotenv', { moduleName: '@env', path: '.env' }]]

# Limpia y reinicia
npx expo start --clear
```

#### Las variables de entorno no se actualizan
**Solución**:
```bash
# Después de modificar .env, SIEMPRE reinicia Metro:
# Ctrl+C en la terminal
npx expo start --clear
```

### 🌐 Problemas con Expo Go

#### "Something went wrong" al escanear QR
**Solución**:
1. Verifica que tu computadora y dispositivo están en la misma red WiFi
2. Prueba con tunnel mode:
```bash
npx expo start --tunnel
```

3. Si persiste, ingresa la URL manualmente en Expo Go

#### La app no se actualiza al guardar cambios
**Solución**:
- Presiona **`r`** en la terminal para recargar manualmente
- O agita el dispositivo y tap en "Reload"
- Verifica que "Fast Refresh" está habilitado en configuración de Expo Go

### 🚨 Comandos de Emergencia

```bash
# Limpieza completa (soluciona el 90% de los problemas)
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npx expo start --clear

# En Windows PowerShell:
Remove-Item -Recurse -Force node_modules, package-lock.json
npm cache clean --force
npm install
npx expo start --clear
```

### 📞 Obtener Ayuda Adicional

Si el problema persiste:

1. **Revisa los logs**: Busca errores específicos en la consola
2. **Modo verbose**: `npx expo start --verbose`
3. **Issues en GitHub**: [Proyecto Issues](https://github.com/jeeheonjeong/Proyecto_Final_React_Native/issues)
4. **Documentación oficial**:
   - [Expo Docs](https://docs.expo.dev)
   - [Firebase Docs](https://firebase.google.com/docs)
   - [React Native Docs](https://reactnative.dev)

## 📊 Comandos Útiles y Scripts NPM

### 🚀 Comandos de Desarrollo

```bash
# Iniciar servidor de desarrollo (modo normal)
npm start

# Iniciar con caché limpiada (recomendado después de cambios importantes)
npm start -- --clear

# Iniciar en modo verbose (ver logs detallados)
npm start -- --verbose

# Iniciar con tunnel (útil si estás detrás de NAT/firewall)
npm start -- --tunnel

# Iniciar en modo LAN (para conectar dispositivos en la misma red)
npm start -- --lan
```

### 📱 Comandos de Plataforma

```bash
# Abrir en emulador Android (requiere Android Studio)
npm run android

# Abrir en simulador iOS (requiere Xcode, solo macOS)
npm run ios

# Abrir en navegador web (funcionalidad limitada)
npm run web
```

### 🧹 Comandos de Limpieza

```bash
# Limpiar caché de Metro bundler
npx expo start --clear

# Limpiar caché de npm
npm cache clean --force

# Limpiar node_modules y reinstalar (TOTAL)
rm -rf node_modules package-lock.json
npm install

# Windows PowerShell (equivalente)
Remove-Item -Recurse -Force node_modules, package-lock.json; npm install

# Limpiar caché de Expo
npx expo start -c
```

### 🔧 Comandos de Configuración

```bash
# Instalar una dependencia
npm install nombre-paquete

# Instalar dependencia de desarrollo
npm install --save-dev nombre-paquete

# Actualizar todas las dependencias
npm update

# Verificar dependencias desactualizadas
npm outdated

# Auditar vulnerabilidades de seguridad
npm audit

# Arreglar vulnerabilidades automáticamente
npm audit fix
```

### 📦 Comandos de Expo

```bash
# Ver información del proyecto
npx expo --version

# Login en cuenta de Expo (para EAS Build)
npx expo login

# Logout de Expo
npx expo logout

# Registrar una cuenta nueva de Expo
npx expo register

# Publicar una actualización OTA (Over-The-Air)
npx expo publish

# Abrir proyecto en Expo Go desde URL
npx expo start --dev-client
```

### 🏗️ Compilación para Producción (EAS Build)

```bash
# Instalar EAS CLI globalmente
npm install -g eas-cli

# Login en EAS
eas login

# Configurar proyecto EAS (primera vez)
eas build:configure

# Compilar APK para Android
eas build --platform android --profile preview

# Compilar AAB para Google Play Store
eas build --platform android --profile production

# Compilar IPA para iOS (requiere cuenta Apple Developer)
eas build --platform ios --profile production

# Compilar para ambas plataformas
eas build --platform all

# Ver estado de compilaciones
eas build:list

# Subir a stores automáticamente
eas submit --platform android
eas submit --platform ios
```

### 🔍 Comandos de Debugging

```bash
# Abrir React DevTools
npx react-devtools

# Abrir debugger en Chrome
# (Agita el dispositivo y selecciona "Debug")

# Ver logs en tiempo real
npx expo start --verbose

# Inspeccionar bundle de JavaScript
npx expo export

# Analizar tamaño del bundle
npx expo export --analyze
```

### 🧪 Comandos de Testing (si tienes tests configurados)

```bash
# Ejecutar tests
npm test

# Ejecutar tests en modo watch
npm test -- --watch

# Ejecutar tests con cobertura
npm test -- --coverage

# Ejecutar tests específicos
npm test -- NombreDelTest
```

### 📝 Scripts Personalizados del Proyecto

```json
// Definidos en package.json > scripts
{
  "start": "expo start",
  "android": "expo start --android",
  "ios": "expo start --ios",
  "web": "expo start --web"
}
```

### 🔥 Comandos de Emergencia

```bash
# Si la app no funciona después de git pull
rm -rf node_modules package-lock.json
npm install
npx expo start --clear

# Si hay problemas con watchman (macOS/Linux)
watchman watch-del-all

# Si Metro bundler no responde
lsof -ti:8081 | xargs kill -9  # macOS/Linux
npx expo start --clear

# Si Expo Go no conecta
npx expo start --tunnel --clear

# Reinstalar Expo CLI
npm uninstall -g expo-cli
npm install -g expo-cli
```

### 💡 Tips de Productividad

**Durante el desarrollo activo**:
```bash
# Mantén esto corriendo en una terminal
npm start

# Atajos en el menú interactivo:
# - Presiona 'r' para recargar
# - Presiona 'm' para abrir menú
# - Presiona 'j' para abrir debugger
# - Presiona 'o' para abrir en simulador
```

**Después de cambios importantes** (cambio de dependencias, .env, babel.config.js):
```bash
# SIEMPRE limpia la caché
npx expo start --clear
```

**Antes de hacer commit**:
```bash
# Verifica que no hay errores
npm start -- --clear
# Prueba en dispositivo real
# Verifica que .env NO está en el commit
```

## 🎨 Sistema de Diseño y Estilos

### Arquitectura de Estilos

Este proyecto implementa un **sistema de diseño centralizado** en `src/styles/theme.js` que garantiza consistencia visual en toda la aplicación.

### 📋 Estructura del Theme

```javascript
// src/styles/theme.js

export const colors = {
  // UI Principal
  primary: '#007AFF',      // Azul iOS - Botones principales
  success: '#00ff40ff',    // Verde - Estados exitosos
  danger: '#FF3B30',       // Rojo - Acciones destructivas
  warning: '#FF9500',      // Naranja - Advertencias
  
  // Backgrounds
  background: '#f5f5f5',   // Fondo principal
  white: '#fff',           // Fondo de tarjetas
  
  // Textos
  text: '#333',            // Texto principal
  darkGray: '#666',        // Texto secundario
  gray: '#999',            // Texto deshabilitado
  
  // Bordes y Divisores
  border: '#ddd',
  lightGray: '#f0f0f0',
  lightText: '#e0e0e0',
  
  // Estados
  green: '#0fe419ff',
  cyan: '#00bef8ff',
  blue: '#0051ffff',
  lightBlue: '#E3F2FD'
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48
};

export const borderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24
};

export const shadows = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5
  }
};

export const typography = {
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text
  },
  body: {
    fontSize: 16,
    color: colors.text
  },
  caption: {
    fontSize: 14,
    color: colors.darkGray
  },
  small: {
    fontSize: 12,
    color: colors.gray
  }
};
```

### 🎯 Uso del Theme en Componentes

#### Importación y Uso

```javascript
import { colors, spacing, typography, shadows } from '../styles/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    ...shadows.card,
  },
  title: {
    ...typography.title,
    marginBottom: spacing.sm,
  }
});
```

### 📁 Organización de Estilos

```
src/
├── styles/
│   └── theme.js                 # Sistema de diseño centralizado
│
└── screens/
    ├── StockScreen.js           # Componente
    └── styles/
        └── StockScreenStyles.js # Estilos específicos de la pantalla
```

**Patrón de uso**:
```javascript
// En el componente
import { styles } from './styles/StockScreenStyles';

// En el archivo de estilos
import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: spacing.md,
  }
});
```

### 🎨 Componentes Comunes Reutilizables

```javascript
// theme.js también exporta estilos comunes

export const commonStyles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  
  card: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadows.card,
  },
  
  button: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: borderRadius.sm,
    alignItems: 'center',
  },
  
  buttonText: {
    color: colors.white,
    ...typography.body,
    fontWeight: '600',
  },
  
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.sm,
    padding: spacing.md,
    ...typography.body,
  }
});
```

### 🔄 Ventajas del Sistema Centralizado

1. **✅ Consistencia**: Todos los componentes usan los mismos colores y espaciados
2. **✅ Mantenibilidad**: Cambiar un color afecta toda la app automáticamente
3. **✅ Escalabilidad**: Fácil agregar nuevos valores al theme
4. **✅ Reutilización**: Componentes comunes listos para usar
5. **✅ Legibilidad**: Nombres semánticos en lugar de valores hardcodeados
6. **✅ Documentación**: El theme sirve como guía de estilo visual

### 🎯 Ejemplo Completo: Crear Nueva Pantalla

```javascript
// src/screens/NuevaPantalla.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles/NuevaPantallaStyles';

export default function NuevaPantalla() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Mi Título</Text>
        <Text style={styles.body}>Contenido aquí</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acción</Text>
      </TouchableOpacity>
    </View>
  );
}

// src/screens/styles/NuevaPantallaStyles.js
import { StyleSheet } from 'react-native';
import { colors, spacing, typography, shadows, borderRadius } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    ...shadows.card,
  },
  title: {
    ...typography.title,
    marginBottom: spacing.sm,
  },
  body: {
    ...typography.body,
    color: colors.darkGray,
  },
  button: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: borderRadius.sm,
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  buttonText: {
    ...typography.body,
    color: colors.white,
    fontWeight: '600',
  }
});
```

### 🎨 Personalización del Theme

Para cambiar el esquema de colores de toda la app:

```javascript
// src/styles/theme.js

// Ejemplo: Tema oscuro
export const colors = {
  primary: '#0A84FF',
  background: '#000000',
  white: '#1C1C1E',
  text: '#FFFFFF',
  darkGray: '#AEAEB2',
  // ... etc
};

// Todos los componentes se actualizarán automáticamente
```

## 📱 Compatibilidad y Requisitos

### Plataformas Soportadas

| Plataforma | Versión Mínima | Versión Recomendada | Estado |
|------------|----------------|---------------------|--------|
| **Android** | 5.0 (API 21) | 13+ (API 33) | ✅ Completo |
| **iOS** | 13.0+ | 16+ | ✅ Completo |
| **Web** | Navegadores modernos | Chrome 90+, Safari 14+ | ⚠️ Limitado* |

\* **Nota sobre Web**: La funcionalidad web es limitada. SQLite, cámara y ubicación GPS no funcionan en navegador. Solo para desarrollo y testing de UI.

### Requisitos del Sistema de Desarrollo

#### Para Desarrollo en Windows
- **Windows 10/11** (64-bit)
- **Node.js** v18.0.0 o superior
- **npm** v8.0.0 o superior
- **Android Studio** (para emulador Android)
- **Git** para control de versiones
- **8 GB RAM** mínimo (16 GB recomendado)
- **10 GB espacio libre** en disco

#### Para Desarrollo en macOS
- **macOS** 11 Big Sur o superior
- **Node.js** v18.0.0 o superior
- **npm** v8.0.0 o superior
- **Xcode** 13+ (para iOS)
- **Android Studio** (para Android)
- **Homebrew** (recomendado)
- **8 GB RAM** mínimo (16 GB recomendado)

#### Para Desarrollo en Linux
- **Ubuntu 20.04+** o distribución equivalente
- **Node.js** v18.0.0 o superior
- **npm** v8.0.0 o superior
- **Android Studio** (para emulador)
- **8 GB RAM** mínimo

### Dispositivos Físicos

#### Android
- **Versión mínima**: Android 5.0 Lollipop (API 21)
- **Versión probada**: Android 13 (API 33)
- **RAM mínima**: 2 GB
- **Almacenamiento**: 500 MB libres
- **Cámara**: Recomendada (no obligatoria)
- **GPS**: Recomendado (no obligatorio)

#### iOS
- **Versión mínima**: iOS 13.0
- **Dispositivos probados**: iPhone 8 y superiores
- **RAM mínima**: 2 GB
- **Almacenamiento**: 500 MB libres

### Versiones de Dependencias Críticas

```json
{
  "expo": "~54.0.27",
  "react": "19.1.0",
  "react-native": "0.81.4",
  "firebase": "^11.1.0",
  "expo-sqlite": "~15.0.0",
  "@reduxjs/toolkit": "^2.5.0",
  "react-navigation/native": "^7.0.14"
}
```

### Servicios Externos Requeridos

#### Firebase
- **Plan**: Spark (Gratuito) es suficiente para desarrollo
- **Servicios usados**:
  - Authentication (Email/Password)
  - Realtime Database
- **Límites gratuitos**:
  - 10,000 lecturas/escrituras por día
  - 1 GB almacenamiento
  - 10 GB transferencia/mes

#### Google Maps
- **API Keys requeridas**:
  - Maps SDK for Android
  - Maps SDK for iOS
- **Plan gratuito**: $200 crédito mensual
- **Costo después**: ~$7 por 1,000 cargas de mapa

### Pruebas de Compatibilidad

#### Dispositivos Probados ✅

**Android**:
- Samsung Galaxy S21 (Android 13)
- Google Pixel 5 (Android 12)
- Xiaomi Redmi Note 10 (Android 11)
- Emulador Android Studio (API 33)

**iOS**:
- iPhone 13 Pro (iOS 16)
- iPhone 11 (iOS 15)
- iPad Air (iOS 16)
- Simulador Xcode (iOS 16)

### Funcionalidades por Plataforma

| Funcionalidad | Android | iOS | Web |
|---------------|---------|-----|-----|
| Autenticación Firebase | ✅ | ✅ | ✅ |
| SQLite Local | ✅ | ✅ | ❌ |
| Cámara | ✅ | ✅ | ⚠️* |
| Galería de Fotos | ✅ | ✅ | ⚠️* |
| GPS / Ubicación | ✅ | ✅ | ⚠️* |
| Google Maps | ✅ | ✅ | ✅ |
| Sincronización Firebase | ✅ | ✅ | ✅ |
| Notificaciones Push | 🔧 | 🔧 | 🔧 |

**Leyenda**:
- ✅ Completamente funcional
- ⚠️ Funcionalidad limitada o requiere permisos especiales
- ❌ No soportado
- 🔧 Planificado pero no implementado

\* En web, la cámara y galería usan APIs del navegador con funcionalidad reducida

### Rendimiento Esperado

#### Tiempos de Carga
- **Primera carga**: < 5 segundos
- **Carga posterior**: < 2 segundos
- **Sincronización**: < 3 segundos (100 productos)
- **Renderizado de lista**: 60 FPS constante

#### Uso de Recursos
- **Memoria RAM**: 80-150 MB
- **Almacenamiento**: 50-100 MB (app + caché)
- **Base de datos SQLite**: 10-50 MB (según cantidad de productos)
- **Batería**: Consumo moderado (GPS en uso activo)
- **Datos móviles**: ~1-5 MB por sesión (solo sincronización)

### Limitaciones Conocidas

1. **Web**: 
   - SQLite no funciona (solo memoria temporal)
   - Cámara y galería con funcionalidad limitada
   - GPS puede requerir HTTPS

2. **Android < 6.0**:
   - Permisos en tiempo de instalación (no runtime)
   - Algunas animaciones más lentas

3. **iOS < 13.0**:
   - No probado, puede tener problemas de compatibilidad
   - Algunas APIs de Expo pueden no funcionar

4. **Tablets**:
   - UI optimizada para móviles (puede verse estirada)
   - Funcionalidad completa pero diseño responsive limitado

### Actualización de Dependencias

```bash
# Ver versiones desactualizadas
npm outdated

# Actualizar dependencias menores (parches)
npm update

# Actualizar Expo SDK (CUIDADO: puede romper la app)
npx expo upgrade

# Verificar compatibilidad después de actualizar
npx expo-doctor
```

## 🤝 Contribuir al Proyecto

¡Las contribuciones son bienvenidas! Si quieres mejorar KHAN Stock, sigue esta guía.

### 🔄 Flujo de Contribución

#### 1. Fork y Clone

```bash
# Haz fork del repositorio en GitHub (botón Fork)
# Luego clona tu fork
git clone https://github.com/TU_USUARIO/Proyecto_Final_React_Native.git
cd Proyecto_Final_React_Native

# Agrega el repositorio original como upstream
git remote add upstream https://github.com/jeeheonjeong/Proyecto_Final_React_Native.git
```

#### 2. Crea una Rama

```bash
# Actualiza tu rama main
git checkout main
git pull upstream main

# Crea una rama descriptiva
git checkout -b feature/nueva-funcionalidad
# o
git checkout -b fix/correccion-de-bug
```

#### 3. Realiza tus Cambios

```bash
# Instala dependencias
npm install

# Desarrolla tu funcionalidad o corrección
# Asegúrate de seguir las convenciones del proyecto

# Prueba tus cambios
npm start
```

#### 4. Commit y Push

```bash
# Agrega tus cambios
git add .

# Commit con mensaje descriptivo
git commit -m "feat: Agrega filtro avanzado de búsqueda"

# Push a tu fork
git push origin feature/nueva-funcionalidad
```

#### 5. Crea Pull Request

1. Ve a tu fork en GitHub
2. Click en **"Compare & pull request"**
3. Describe claramente tus cambios
4. Espera revisión y feedback

### 📝 Convenciones de Código

#### Mensajes de Commit

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: Agrega nueva funcionalidad
fix: Corrige bug específico
docs: Actualiza documentación
style: Cambios de formato (no afectan funcionalidad)
refactor: Refactorización de código
test: Agrega o modifica tests
chore: Mantenimiento general
```

**Ejemplos**:
```bash
feat: Agrega exportación de productos a CSV
fix: Corrige sincronización duplicada en productos
docs: Actualiza guía de instalación para Windows
refactor: Simplifica lógica de ProductCard
style: Aplica formato consistente en theme.js
```

#### Estilo de Código JavaScript

```javascript
// ✅ CORRECTO

// 1. Usar arrow functions para componentes funcionales
const ProductCard = ({ product, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(product)}>
      <Text>{product.name}</Text>
    </TouchableOpacity>
  );
};

// 2. Destructuring de props
const { name, price, quantity } = product;

// 3. Nombres descriptivos
const handleProductPress = () => { /* ... */ };

// 4. Comentarios útiles
// Sincroniza productos locales con Firebase
const syncProducts = async () => { /* ... */ };

// 5. Usar const/let, nunca var
const userId = user.uid;
let isLoading = false;

// 6. Imports organizados
import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { colors, spacing } from '../styles/theme';
```

```javascript
// ❌ INCORRECTO

// No usar var
var name = 'Product';

// No funciones sin nombre descriptivo
const f = () => { /* ... */ };

// No hardcodear valores
backgroundColor: '#007AFF'  // Usar colors.primary

// No código sin formato
const{name,price}=product;if(name){return price}else{return 0}
```

#### Estructura de Archivos

```javascript
// Orden estándar en componentes:
import ...        // 1. Imports
                  // 2. Línea en blanco
const Component   // 3. Componente
const styles      // 4. Estilos
export default    // 5. Export
```

**Ejemplo completo**:
```javascript
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../styles/theme';

const MiComponente = ({ titulo, onPress }) => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titulo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 18,
    color: colors.text,
  },
});

export default MiComponente;
```

### 🎯 Áreas para Contribuir

#### 🟢 Buenas Primeras Contribuciones

- Mejorar documentación (README, comentarios)
- Agregar validaciones de formularios
- Mejorar mensajes de error para usuarios
- Agregar loading states
- Optimizar rendimiento de listas
- Agregar tests unitarios

#### 🟡 Contribuciones Intermedias

- Implementar categorías personalizadas
- Agregar filtros avanzados de búsqueda
- Implementar ordenamiento de productos
- Agregar estadísticas y gráficos
- Mejorar UI/UX de pantallas existentes
- Implementar paginación en listas largas

#### 🔴 Contribuciones Avanzadas

- Implementar notificaciones push
- Agregar compartir productos entre usuarios
- Implementar exportación de datos (PDF, CSV)
- Agregar soporte para múltiples idiomas (i18n)
- Implementar modo oscuro
- Agregar autenticación biométrica
- Implementar backup/restauración de datos

### 🐛 Reportar Bugs

Si encuentras un bug, por favor crea un [Issue](https://github.com/jeeheonjeong/Proyecto_Final_React_Native/issues) con:

```markdown
**Descripción del Bug**
Una descripción clara y concisa del problema.

**Pasos para Reproducir**
1. Ve a '...'
2. Toca en '...'
3. Desplázate hasta '...'
4. Ve el error

**Comportamiento Esperado**
Lo que esperabas que sucediera.

**Comportamiento Actual**
Lo que realmente sucede.

**Screenshots**
Si aplica, agrega screenshots.

**Información del Dispositivo**
- Plataforma: [iOS/Android/Web]
- Versión del OS: [ej. iOS 16.1]
- Versión de la App: [ej. 1.0.0]
- Dispositivo: [ej. iPhone 13, Samsung Galaxy S21]

**Logs**
Copia los logs relevantes de la consola.
```

### 💡 Solicitar Funcionalidades

Para solicitar nuevas funcionalidades, crea un [Issue](https://github.com/jeeheonjeong/Proyecto_Final_React_Native/issues) con la etiqueta `enhancement`:

```markdown
**Descripción de la Funcionalidad**
Una descripción clara de qué quieres agregar.

**Problema que Resuelve**
Explica qué problema resuelve esta funcionalidad.

**Solución Propuesta**
Describe cómo te imaginas que funcionaría.

**Alternativas Consideradas**
Otras formas en que pensaste resolver esto.

**Información Adicional**
Contexto adicional, screenshots, mockups, etc.
```

### ✅ Checklist antes de Pull Request

Antes de enviar tu PR, verifica:

- [ ] El código sigue las convenciones del proyecto
- [ ] Los mensajes de commit son descriptivos
- [ ] No hay errores de ESLint o TypeScript
- [ ] La app funciona correctamente en desarrollo
- [ ] No incluiste archivos sensibles (.env, keys, etc.)
- [ ] Actualizaste la documentación si es necesario
- [ ] Agregaste comentarios en código complejo
- [ ] Probaste en Android y/o iOS
- [ ] No hay console.logs innecesarios
- [ ] Las importaciones están organizadas

### 🔍 Revisión de Código

Durante la revisión:

- Se respetuoso y constructivo
- Explica el "por qué", no solo el "qué"
- Sé abierto a feedback y sugerencias
- Responde a comentarios de manera oportuna
- Actualiza tu PR según los comentarios

### 📜 Código de Conducta

- Sé respetuoso con todos los contribuidores
- Usa lenguaje inclusivo
- Acepta críticas constructivas
- Enfócate en lo mejor para el proyecto
- Ayuda a nuevos contribuidores

## 📝 Licencia

Este proyecto está bajo la licencia **MIT**. Eres libre de usar, modificar y distribuir este software con las siguientes condiciones:

```
MIT License

Copyright (c) 2024 Jeeheon Jeong

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### ¿Qué significa esto?

✅ **Puedes**:
- Usar el código en proyectos personales o comerciales
- Modificar el código según tus necesidades
- Distribuir copias del software
- Usar el código para aprender
- Crear trabajos derivados

❌ **No puedes**:
- Responsabilizar al autor por problemas o daños
- Usar el nombre del autor para promocionar tu producto sin permiso

📋 **Debes**:
- Incluir la licencia MIT y el copyright en cualquier copia del software
- Mantener el aviso de copyright original

---

## 📧 Contacto y Soporte

### 👨‍💻 Desarrollador

**Jeeheon Jeong**
- 📧 Email: [jeeheon.dev@gmail.com](mailto:jeeheon.dev@gmail.com)
- 💼 GitHub: [@jeeheonjeong](https://github.com/jeeheonjeong)
- 🔗 LinkedIn: [linkedin.com/in/jeeheon-jeong](https://linkedin.com/in/jeeheon-jeong)

### 🐛 Reportar Problemas

Si encuentras un bug o tienes una sugerencia:

1. **Revisa** si ya existe un [Issue](https://github.com/jeeheonjeong/Proyecto_Final_React_Native/issues) similar
2. Si no existe, **crea uno nuevo** con detalles específicos
3. Incluye logs, screenshots y pasos para reproducir

### 💬 Obtener Ayuda

- 💬 [Discussions en GitHub](https://github.com/jeeheonjeong/Proyecto_Final_React_Native/discussions)
- 🐛 [Issues en GitHub](https://github.com/jeeheonjeong/Proyecto_Final_React_Native/issues)
- 📧 Email: jeeheon.dev@gmail.com

---

## 🙏 Agradecimientos

Este proyecto fue posible gracias a:

### 🛠️ Tecnologías y Frameworks
- **Facebook/Meta** - Por React Native
- **Expo Team** - Por la increíble plataforma Expo
- **Google** - Por Firebase y Google Maps
- **Redux Team** - Por Redux Toolkit

### 📚 Comunidad
- Comunidad de React Native en GitHub
- Expo Community Forums
- Stack Overflow contributors
- Todos los mantenedores de paquetes open source utilizados

---

## 🚀 Roadmap y Futuras Mejoras

### Versión 1.1 (Próxima)
- [ ] Modo oscuro (Dark Mode)
- [ ] Exportación de productos a CSV/PDF
- [ ] Estadísticas y gráficos de inventario
- [ ] Notificaciones push para bajo stock
- [ ] Filtros avanzados y ordenamiento

### Versión 1.2
- [ ] Compartir productos entre usuarios
- [ ] Sistema de permisos y roles
- [ ] Backup y restauración de datos
- [ ] Soporte multi-idioma (i18n)
- [ ] Autenticación biométrica

### Versión 2.0 (A largo plazo)
- [ ] Versión web completa
- [ ] Scanner de códigos de barras
- [ ] Integración con e-commerce
- [ ] API REST para integraciones
- [ ] Dashboard web para administradores

---

## 📄 Changelog

### [1.0.0] - 2024-12-06

#### ✨ Funcionalidades Implementadas
- Sistema completo de autenticación con Firebase
- Gestión CRUD de productos (crear, leer, actualizar, eliminar)
- Captura de fotos con cámara y selección desde galería
- Geolocalización GPS automática
- Visualización de productos en Google Maps
- Sincronización bidireccional offline-first con SQLite y Firebase
- Sistema de diseño centralizado con theme.js
- Navegación por pestañas y stack navigation
- Búsqueda y filtrado de productos por categoría
- Pull-to-refresh en listados
- Variables de entorno para protección de API keys

#### 🔧 Tecnologías Utilizadas
- React Native 0.81.4
- Expo SDK ~54.0
- Firebase 11.1.0
- SQLite 15.0.0
- Redux Toolkit 2.5.0
- React Navigation 7.0
- Google Maps 1.18.0

---

## ⭐ Dale una Estrella

Si este proyecto te resultó útil, considera darle una ⭐ en GitHub. ¡Ayuda a otros a descubrirlo!

---

## 📚 Recursos Adicionales

### 📖 Documentación Oficial

#### React Native y Expo
- [React Native Docs](https://reactnative.dev) - Documentación oficial de React Native
- [Expo Documentation](https://docs.expo.dev) - Guías completas de Expo
- [React Native Directory](https://reactnative.directory) - Directorio de librerías compatibles
- [Expo SDK Reference](https://docs.expo.dev/versions/latest/) - Referencia completa de APIs

#### Firebase
- [Firebase Docs](https://firebase.google.com/docs) - Documentación general
- [Firebase Authentication](https://firebase.google.com/docs/auth) - Guía de autenticación
- [Realtime Database](https://firebase.google.com/docs/database) - Base de datos en tiempo real
- [Firebase Security Rules](https://firebase.google.com/docs/rules) - Configuración de seguridad

#### Redux y Estado
- [Redux Toolkit](https://redux-toolkit.js.org) - Documentación oficial
- [React Redux](https://react-redux.js.org) - Integración con React
- [Redux DevTools](https://github.com/reduxjs/redux-devtools) - Herramientas de debugging

#### Google Maps
- [React Native Maps](https://github.com/react-native-maps/react-native-maps) - Documentación del paquete
- [Google Maps Platform](https://developers.google.com/maps) - APIs de Google Maps
- [Geocoding API](https://developers.google.com/maps/documentation/geocoding) - Convertir coordenadas

### 🎓 Tutoriales Recomendados

#### Para Principiantes
- [React Native Tutorial](https://reactnative.dev/docs/getting-started) - Inicio oficial
- [Expo Get Started](https://docs.expo.dev/get-started/create-a-new-app) - Primera app con Expo
- [JavaScript ES6 Tutorial](https://www.freecodecamp.org/news/write-less-do-more-with-javascript-es6-5fd4a8e50ee2/) - Fundamentos modernos de JS
- [React Hooks Tutorial](https://reactjs.org/docs/hooks-intro.html) - Comprender hooks

#### Nivel Intermedio
- [React Navigation Guide](https://reactnavigation.org/docs/getting-started) - Navegación completa
- [Redux Essentials](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) - Redux desde cero
- [Firebase for React Native](https://rnfirebase.io) - Integración Firebase
- [Styling React Native](https://reactnative.dev/docs/style) - Estilos y diseño

#### Nivel Avanzado
- [Performance Optimization](https://reactnative.dev/docs/performance) - Optimización de rendimiento
- [Native Modules](https://reactnative.dev/docs/native-modules-intro) - Código nativo
- [Testing React Native](https://reactnative.dev/docs/testing-overview) - Testing completo
- [Offline Data Patterns](https://medium.com/@jonnykalambay/sqlite-in-react-native-398c1c07ff28) - Patrones offline

### 🎥 Videos y Cursos

#### YouTube
- [React Native Tutorial for Beginners](https://www.youtube.com/watch?v=0-S5a0eXPoc) - Crash Course
- [Expo in 100 Seconds](https://www.youtube.com/watch?v=vFW_TxKLyrE) - Introducción rápida
- [Redux Toolkit Tutorial](https://www.youtube.com/watch?v=9zySeP5vH9c) - Redux moderno

#### Plataformas de Cursos
- [React Native - The Practical Guide](https://www.udemy.com/course/react-native-the-practical-guide/) (Udemy)
- [CS50 Mobile App Development](https://cs50.harvard.edu/mobile/) (Harvard - Gratis)
- [React Native Specialization](https://www.coursera.org/specializations/react-native) (Coursera)

### 🛠️ Herramientas de Desarrollo

#### Editores y IDEs
- [Visual Studio Code](https://code.visualstudio.com) - Editor recomendado
  - Extensión: [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)
  - Extensión: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - Extensión: [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

#### Debugging y Testing
- [React DevTools](https://react-devtools-tutorial.vercel.app) - Inspección de componentes
- [Flipper](https://fbflipper.com) - Debugging avanzado
- [Reactotron](https://github.com/infinitered/reactotron) - Inspección de Redux y APIs

#### Diseño y UI
- [Figma](https://www.figma.com) - Diseño de interfaces
- [React Native Elements](https://reactnativeelements.com) - Librería de componentes
- [NativeBase](https://nativebase.io) - Framework de UI
- [Lottie](https://airbnb.io/lottie/) - Animaciones complejas

#### APIs y Backend
- [Postman](https://www.postman.com) - Testing de APIs
- [Firebase Console](https://console.firebase.google.com) - Gestión de Firebase
- [Expo Snack](https://snack.expo.dev) - Playground online

### 📰 Blogs y Sitios Web

#### Blogs Técnicos
- [React Native Blog](https://reactnative.dev/blog) - Noticias oficiales
- [Expo Blog](https://blog.expo.dev) - Actualizaciones de Expo
- [React Native School](https://www.reactnativeschool.com) - Tutoriales prácticos

#### Comunidades
- [r/reactnative](https://www.reddit.com/r/reactnative/) - Reddit
- [React Native Community](https://www.reactnative.dev/community/overview) - Recursos oficiales
- [Reactiflux Discord](https://www.reactiflux.com) - Chat en tiempo real

### 💬 Soporte y Ayuda

#### Stack Overflow
- [react-native tag](https://stackoverflow.com/questions/tagged/react-native)
- [expo tag](https://stackoverflow.com/questions/tagged/expo)
- [firebase tag](https://stackoverflow.com/questions/tagged/firebase)

#### Foros y Comunidades
- [Expo Forums](https://forums.expo.dev) - Foro oficial de Expo
- [React Native Community](https://github.com/react-native-community) - GitHub Discussions
- [Discord de React Native](https://discord.gg/react-native) - Chat en vivo

### 📱 Inspiración y Ejemplos

#### Repositorios de Ejemplo
- [React Native Examples](https://github.com/ReactNativeNews/React-Native-Apps) - Apps open source
- [Expo Examples](https://github.com/expo/examples) - Ejemplos oficiales
- [Awesome React Native](https://github.com/jondot/awesome-react-native) - Lista curada

#### Showcases
- [Expo Showcase](https://expo.dev/showcase) - Apps construidas con Expo
- [React Native Showcase](https://reactnative.dev/showcase) - Casos de éxito

### 🔧 Herramientas de Productividad

#### CLI Tools
```bash
# React Native CLI
npm install -g react-native-cli

# EAS CLI (Expo Application Services)
npm install -g eas-cli

# Ignite CLI (Boilerplate generator)
npm install -g ignite-cli
```

#### Generadores de Código
- [Ignite](https://github.com/infinitered/ignite) - Boilerplate robusto
- [React Native Starter Kit](https://github.com/mcnamee/react-native-starter-kit)

### 📊 Analytics y Monitoreo

- [Firebase Analytics](https://firebase.google.com/docs/analytics) - Analytics gratuito
- [Sentry](https://sentry.io) - Monitoreo de errores
- [Amplitude](https://amplitude.com) - Analytics de comportamiento
- [Mixpanel](https://mixpanel.com) - Product analytics

### 🚀 Despliegue y CI/CD

- [EAS Build](https://docs.expo.dev/build/introduction/) - Compilación en la nube
- [EAS Submit](https://docs.expo.dev/submit/introduction/) - Subida automática a stores
- [GitHub Actions](https://github.com/features/actions) - CI/CD
- [Fastlane](https://fastlane.tools) - Automatización de despliegue

### 📖 Libros Recomendados

- **"React Native in Action"** - Nader Dabit
- **"Learning React Native"** - Bonnie Eisenman
- **"Fullstack React Native"** - Devin Abbott
- **"React Native Cookbook"** - Daniel Ward

### 🎨 Recursos de Diseño

#### Kits de UI/UX
- [Material Design](https://material.io/design) - Guías de Google
- [iOS Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) - Guías de Apple
- [React Native Paper](https://callstack.github.io/react-native-paper/) - Material Design para RN

#### Iconos y Assets
- [Ionicons](https://ionic.io/ionicons) - Librería de iconos
- [Font Awesome](https://fontawesome.com) - Iconos populares
- [Unsplash](https://unsplash.com) - Fotos de stock gratuitas
- [Flaticon](https://www.flaticon.com) - Iconos vectoriales

---

### 💡 Tips de Aprendizaje

1. **Practica constantemente** - Construye proyectos pequeños
2. **Lee código de otros** - GitHub es tu mejor amigo
3. **Únete a comunidades** - Discord, Reddit, Stack Overflow
4. **Mantente actualizado** - Lee blogs y changelogs
5. **Documenta tu aprendizaje** - Escribe sobre lo que aprendes
6. **Contribuye a open source** - Mejora tus habilidades colaborando

---

**Última actualización:** Diciembre 2025

**Versión:** 1.0.0

**Estado:** ✅ En Producción
