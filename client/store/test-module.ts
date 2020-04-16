import { Module, VuexModule, Action } from 'vuex-module-decorators'
import { Context } from '@nuxt/types'
@Module({
  name: 'testModule',
  stateFactory: true,
  namespaced: true
})
export default class TestModule extends VuexModule {
  public title: number = 0

  @Action({ rawError: true })
  async fetchMyCreatedEvent(ctx: Context) {
    const eventList = await ctx.app.$eventRepository.fetch()
    return eventList.data
  }
}
