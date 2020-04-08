import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { Exhibits, RootState } from '~/types/exhibits'

@Module({
  name: 'themeModule',
  stateFactory: true,
  namespaced: true
})
export default class ThemeModule extends VuexModule {
  // mode = ModeType.Light
  // @Mutation
  // private UPDATE_MODE(mode: ModeType) {
  //   this.mode = mode
  // }
  // get axles() {
  //   return this.wheels / 2
  // }
}
