import path from 'path';

export default {
  base: '/', 
  build: {
    outDir: 'dist', 
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
};
