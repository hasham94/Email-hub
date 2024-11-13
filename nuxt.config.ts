// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  devServer: {
    port: 3001, // Set the port to 3001
    host: 'localhost' // Default: localhost
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    'radix-vue/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-tiptap-editor',
    '@nuxtjs/supabase'
  ],
  tiptap: {
    prefix: 'Tiptap', //prefix for Tiptap imports, composables not included
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  components: {
    dirs: ['~/components'],
    global: true,
  },
  googleFonts: {
    families: {
      Roboto: [300, 400, 500, 600, 700],
      prefetch: true
    }
  }
})