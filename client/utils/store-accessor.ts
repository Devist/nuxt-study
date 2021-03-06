/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */

import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import globalModule from '~/store/global-module'
import testModule from '~/store/test-module'

let globalStore: globalModule
let testStore: testModule

function initialiseStores(store: Store<any>): void {
  globalStore = getModule(globalModule, store)
  testStore = getModule(testModule, store)
}

export { initialiseStores, globalStore, testStore }
