const pkg = require('./package');

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js' }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Tajawal:400,600,800' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#FFFFFF' },

  /*
   ** Global CSS
   */
  css: ['@/static/global.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules - no tracking
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

};
