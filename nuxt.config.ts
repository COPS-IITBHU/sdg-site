export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  loading: {
    color: '#23CFFF',
    height: '3px'
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: 'SDG Site - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'We at Club of Programmers Software Development Group are a bunch of designers and developers who aim to encourage the development of technology and innovation in IIT BHU campus (and beyond) by learning, sharing knowledge and solving problems.'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'COPS SDG'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'We at Club of Programmers Software Development Group are a bunch of designers and developers who aim to encourage the development of technology and innovation in IIT BHU campus (and beyond) by learning, sharing knowledge and solving problems.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://media.discordapp.net/attachments/937985097779519531/941616659720966144/COPS-Logo.webp'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'COPS SDG'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'We at Club of Programmers Software Development Group are a bunch of designers and developers who aim to encourage the development of technology and innovation in IIT BHU campus (and beyond) by learning, sharing knowledge and solving problems.'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://media.discordapp.net/attachments/937985097779519531/941616659720966144/COPS-Logo.webp'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'static/COPS-Logo.webp' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      {
        rel: 'apple-touch-icon',
        size: '180x180',
        href: '/apple-touch-icon.png'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/variables.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-windicss',
    '@nuxtjs/composition-api/module',
    'nuxt-purge-icons-module',
    '@nuxt/image',
    'nuxt-gsap-module',
    [
      'unplugin-icons/nuxt',
      {
        /* options */
      }
    ]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    liveEdit: false
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extractCSS: {
      ignoreOrder: true
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue|scss)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  },
  sitemap: {
    hostname: 'https://sdg.copsiitbhu.co.in'
  },
  generate: {
    crawler: true,
    fallback: true,
    interval: 2000
  },
  robots: {
    UserAgent: '*',
    Allow: '*'
  },
  windicss: {
    scan: {
      dirs: ['./'],
      exclude: ['node_modules', 'dist', '.git', '.github', '.nuxt']
    },
    preflight: {
      alias: {
        // add nuxt aliases
        'nuxt-link': 'a',
        // @nuxt/image module
        'nuxt-img': 'img'
      }
    }
  },
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    }
  }
}
