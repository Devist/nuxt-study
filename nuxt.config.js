const path = require('path')

module.exports = {
  mode: 'universal', // 렌더링 모드 선택 : 'universal'(서버사이드) | 'spa' (클라이언트 사이드)

  /* *********************************************************
   ** 렌더링 된 모든 HTML 페이지의 <head> 영역 정보
   ** https://ko.nuxtjs.org/api/pages-head
   ** https://vue-nuxt.gitbook.io/nuxt/tutorials/making-blog/undefined - 페이지별 제목, 설명 설정
   * *********************************************************/
  head: {
    // 페이지 제목 설정
    title: process.env.npm_package_name || '',

    // 메타 데이터 설정
    meta: [
      // 언어 인코딩 설정
      { charset: 'utf-8' },

      // 반응형 웹 설정
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // 페이지 설명 설정
      // ※ hid 속성 값은 렌더링 후, data-hid 로 설정 (표준 속성이 아님)
      //   hid 속성은 고유 식별자로 사용됨
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '' // 페이지 설명
      }
    ],

    //  링크 설정
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { rel: 'stylesheet', href: '불러들일 CSS 파일 URL'}
    ],

    // 스크립트 설정
    script: [
      // { src: '불러들일 JavaScript 파일 URL'}
    ]
  },

  /* *********************************************************
   ** progress-bar color 사용자 정의
   ** https://ko.nuxtjs.org/api/configuration-loading/
   * *********************************************************/
  loading: { color: '#fff' },

  /* **************************************
   ** 글로벌 CSS 정의
   * **************************************/
  css: ['~/tailwind.min.css'],

  /* *********************************************************
   ** 앱을 마운팅하기 전에 load할 플러그인 모음
   * *********************************************************/
  plugins: [{ src: '~/plugins/GlobalComponents.js' }],

  /* *********************************************************
   ** Nuxt.js dev-modules (개발시, 또는 최초 빌드시에만 필요한 모듈)
   ** https://nuxtjs.org/api/configuration-modules/#-code-buildmodules-code-
   * *********************************************************/
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  /* *********************************************************
   ** Nuxt.js modules (런타임에도 이용되는 모듈)
   ** https://nuxtjs.org/api/configuration-modules/
   * *********************************************************/
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources'
  ],

  styleResources: { sass: ['@/assets/scss/main.scss'] },

  /* *********************************************************
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   * *********************************************************/
  axios: {
    baseURL: process.env.VUE_APP_BASE_API, // api 요청을 위한 BASE URL
    timeout: 5000, // request timeout
    headers: {
      'Content-Type': 'application/json'
    }
  },

  /* *********************************************************
   ** Build configuration
   ** https://ko.nuxtjs.org/api/configuration-build/#build-프로퍼티
   * *********************************************************/
  build: {
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './client/tailwind.config.js')
      }
    },
    extend(config, ctx) {}
  },

  srcDir: 'client/',
  typescript: {
    typeCheck: {
      eslint: true
    }
  }
}
