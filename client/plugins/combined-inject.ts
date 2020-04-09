import { Plugin, Context } from '@nuxt/types'

/**
 * Plugin 예시 입니다.
 * 타입스크립트에서 inject한 플러그인을 인식하려면 아래와 같이 declare modul을 해줘야합니다.
 */

declare module 'vue/types/vue' {
  interface Vue {
    $myInjectedFunction(message: string): void
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $myInjectedFunction(message: string): void
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $myInjectedFunction(message: string): void
  }
}

const myPlugin: Plugin = (context: Context, inject) => {
  inject('myInjectedFunction', (message: string) => console.log(message))
}

export default myPlugin
