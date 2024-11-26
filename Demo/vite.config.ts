import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // Opción para que el service worker se actualice automáticamente
      registerType: 'autoUpdate', 
      includeAssets: ['LeanIX.webp'], // Íconos y otros assets
      devOptions: {
        enabled: true, // Habilitar el PWA en desarrollo
      },
      manifest: {
        name: 'Tu App', // Nombre completo de la app
        short_name: 'App', // Nombre corto de la app
        description: 'Descripción de tu app', // Descripción corta
        theme_color: '#ffffff', // Color de la barra de navegación
        background_color: '#ffffff', // Color de fondo en la instalación
        display: 'standalone', // Mostrar la app sin barras de navegador
        orientation: 'portrait', // Establecer orientación vertical
        icons: [
          {
            src: '/pwa-192x192.png', // Icono de 192x192
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png', // Icono de 512x512
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
