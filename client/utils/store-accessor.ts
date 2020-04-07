/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */

import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import mymodule from '@/store/modules/mymodule'
import globalModule from '@/store/globalModule'

let myModuleStore: mymodule
let globalStore: globalModule

function initialiseStores(store: Store<any>): void {
  myModuleStore = getModule(mymodule, store)
  globalStore = getModule(globalModule, store)
}

export { initialiseStores, myModuleStore, globalStore }
