import 'dotenv/config';

export default {
  expo: {
    name: "Stock Management",
    slug: "stock-management-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "stockapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.stockapp.management",
      infoPlist: {
        NSCameraUsageDescription: "Esta app necesita acceso a la cámara para tomar fotos de productos.",
        NSPhotoLibraryUsageDescription: "Esta app necesita acceso a tus fotos para seleccionar imágenes de productos.",
        NSLocationWhenInUseUsageDescription: "Esta app necesita tu ubicación para registrar la ubicación de los productos."
      },
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
      }
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/icon.png",
        backgroundColor: "#ffffff"
      },
      package: "com.stockapp.management",
      permissions: [
        "android.permission.CAMERA",
        "android.permission.READ_EXTERNAL_STORAGE",
        "android.permission.WRITE_EXTERNAL_STORAGE",
        "android.permission.ACCESS_FINE_LOCATION",
        "android.permission.ACCESS_COARSE_LOCATION",
        "android.permission.RECORD_AUDIO"
      ],
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY
        }
      }
    },
    web: {
      favicon: "./assets/images/icon.png",
      bundler: "metro"
    },
    plugins: [
      "expo-router",
      [
        "expo-camera",
        {
          cameraPermission: "Permite a la aplicación acceder a tu cámara para tomar fotos de productos."
        }
      ],
      [
        "expo-image-picker",
        {
          photosPermission: "Permite a la aplicación acceder a tu galería de fotos para seleccionar imágenes de productos."
        }
      ],
      [
        "expo-location",
        {
          locationAlwaysAndWhenInUsePermission: "Permite a la aplicación acceder a tu ubicación para registrar dónde se encuentran los productos."
        }
      ]
    ],
    extra: {
      eas: {
        projectId: "1cfc8cc5-9bfd-496a-b97c-d1b798f0e8a8"
      }
    },
    owner: "jeehe"
  }
};
