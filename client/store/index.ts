import { Store, ActionTree } from 'vuex'
import { Context } from '@nuxt/types'
import { initialiseStores } from '@/utils/store-accessor'

const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export * from '@/utils/store-accessor'

export const actions: ActionTree<any, any> = {
  // 만약 store에 nuxtServerInit가 정의되면, nuxt.js는 서버사이드에서 context와 함께 이 함수를 호출합니다.
  // 이는 서버에서 받은 데이터를 클라이언트로 직접 전달할 때 유용합니다.
  // 모듈 모드에서는 최상위 모듈은 index.ts에서만 nuxtServerInit 가 호출된다.
  nuxtServerInit({ commit, dispatch, state }, ctx: Context) {
    // 서버에서 세션을 가지고 있다면 req.session 으로 접근이 가능
    // if (req.session.user) {
    //   commit('user', req.session.user)
    // }
  }
}
