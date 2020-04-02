module.exports = {
  mode: 'universal', // 렌더링 모드 선택 : 'universal'(서버사이드) | 'spa' (클라이언트 사이드)

  /*
   ** 렌더링 된 모든 HTML 페이지의 <head> 영역 정보
   */
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

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  srcDir: 'client/'
}
