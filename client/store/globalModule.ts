import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
  name: 'globalModule',
  stateFactory: true,
  namespaced: true
})
export default class GlobalModule extends VuexModule {
  public windowWidth: number = 0

  @Mutation
  public UPDATE_WINDOW_WIDTH(windowWidth: number) {
    this.windowWidth = windowWidth
  }

  @Action
  public TEST_ACTION() {
    console.log('테스트에유')
  }
}
