import { NuxtConfig } from '@nuxt/types';
import colors from './styles/colors.module';
import { resolve } from 'path';
import '@nuxtjs/tailwindcss';

const config: NuxtConfig = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-starter-guillaume',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // GlobalName
  globalName: 'Nuxt-Starter',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/styles/root.css', '~/styles/colors.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/global.plugin.ts' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['cookie-universal-nuxt'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Paths
  alias: {
    '@components': resolve(__dirname, './components/index.ts'),
    '@assets': resolve(__dirname, './assets/*'),
    '@store': resolve(__dirname, './vuex-modules/index.ts'),
    '@models': resolve(__dirname, './models/index.ts'),
    '@colors': resolve(__dirname, './styls/colors.module.js'),
  },
};

export default config;
