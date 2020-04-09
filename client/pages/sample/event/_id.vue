<template>
  <div>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        class="w-full"
        src="https://tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">테스트</div>
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
    <iframe
      class="w-1/2"
      src="https://leaflo.ldcc.co.kr:4001/?apiKey=95c7278a-7097-4a77-abc5-dc6c386ae67a&userId=%EC%82%AC%EC%9A%A9%EC%9E%90_%EC%95%84%EC%9D%B4%EB%94%94&accessKey=2ca51446-b9d4-4488-904c-65463a371f21&accessSecret=c1ba71bb-8dc5-4e4a-940c-79e7f572ad69"
    ></iframe>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  // Vue의 beforRoute같은 느낌으로 페이지가 불러와지기 전 작업을 수행할 수 있습니다.
  // 미들웨어를 여러개 사용할 수 있습니다.
  middleware: ['logger']
})
export default class EventUI extends Vue {
  // _id.vue에서는 route.param으로 id값이 내려옵니다.
}
</script>

<style ${2|scoped,|} lang="scss"></style>
