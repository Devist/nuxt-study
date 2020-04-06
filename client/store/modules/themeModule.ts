import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

export enum ModeType {
  Light,
  Dark
}

export interface ThemeModuleState {
  mode: ModeType
}

@Module({
  name: 'themeModule',
  stateFactory: true,
  namespaced: true
})
export default class ThemeModule extends VuexModule {
  mode = ModeType.Light

  @Mutation
  private UPDATE_MODE(mode: ModeType) {
    this.mode = mode
  }

  // get axles() {
  //   return this.wheels / 2
  // }
}
