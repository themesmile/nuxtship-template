// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon", "@nuxtjs/google-fonts"],
   googleFonts: {
        families: {
          //Roboto: true, // Include Roboto with all styles
          Nunito: [400, 700, 900, 1000,], // Include Inter with specific weights
          'Josefin+Sans': true,
          // Add more fonts as needed
        },
        // Optional: Configure display, subsets, etc.
        display: 'swap',
        // ... other options
      },
});
