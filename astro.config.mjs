// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://gurudokai.supathub.my.id',
  trailingSlash: 'always',
  redirects: {
    '/kbc': '/kurikulum-berbasis-cinta/',
    '/lkpd': '/ai-pembuat-lkpd/',
    '/modul-ajar': '/generator-modul-ajar/',
    '/pembelajaran-mendalam': '/rencana-pembelajaran-mendalam/',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
