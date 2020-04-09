<template>
  <div>
    <div
      v-for="(event, index) in eventList"
      :key="index"
      class="max-w-sm rounded overflow-hidden shadow-lg"
    >
      <img
        class="w-full"
        src="https://tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
        @click="imgClicked(index, event)"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ event.title }}</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="px-6 py-4">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >#photography</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >#travel</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
          >#winter</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import { testStore } from '@/store'

@Component({})
export default class EventUI extends Vue {
  private title: string = '기본 타이틀'
  private eventList: any

  /**
   *  fetch 메소드는 페이지가 랜더링되기 전에 데이터를 스토어에 넣기위해서 사용합니다.
   *  컴포넌트의 데이터를 세팅하지 않는 점을 빼고는 data 메소드와 비슷합니다.
   *  fetch 메소드가 만약 세팅되어 있다면, 컴포넌트가 로딩되기 전에 매번 호출됩니다(페이지 컴포넌트에 한합니다).
   *  서버사이드 혹은 사용자가 페이지가 이동하기 전에 불려집니다.
   *  fetch 메소드는 첫번째 인수로 받은 컨택스트를 사용하여 데이터를 받고, 그 데이터를 스토어에 넣을 수 있습니다.
   *  fetch 메소드를 비동기화 하기 위해서 Promise를 리턴합니다.
   *  Nuxt.js는 컴포넌트가 랜더링 되기 전에 Promise가 종료되기를 기다립니다.
   */
  async fetch(ctx: Context) {
    // fetch 안에서 비동기 작업은 반드시 return을 해줘야 비동기 작업을 기다립니다.
    return await testStore.fetchMyCreatedEvent(ctx) // 제가 로컬에만 만든 api여서 동작하지 않습니다.
  }

  /**
   * asyncData는 구성 요소를 로드하기 전에 항상 호출됩니다.(페이지 구성요소 만).
   * 서버 측에서 호출하거나 해당 경로를 탐색하기 전에 호출 할 수 있습니다.
   * 이 메소드는 컨텍스트 객체를 첫 번째 인수로 받으면 이를 사용하여 일부 데이터를 가져 와서
   * 구성 요소 데이터를 반환 할 수 있습니다.
   */
  async asyncData(ctx: Context) {
    // asyncData 안에서는 this를 통해 컴포넌트 인스턴스에 접근하지 못합니다. 컴포넌트를 초기화하기 전에 호출되기 때문입니다.
    return {
      eventList: await testStore.fetchMyCreatedEvent(ctx) // 제가 로컬에만 만든 api여서 동작하지 않습니다.
    }
  }

  private imgClicked(idx: any, event: any) {
    this.$router.push({
      path: '/sample/event/' + idx,
      params: event
    })
  }
}
</script>

<style ${2|scoped,|} lang="scss"></style>
