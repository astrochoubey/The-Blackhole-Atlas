// Future responsibility:
// Configure Vite build pipeline for Chrome Extension Manifest V3 and React.

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
