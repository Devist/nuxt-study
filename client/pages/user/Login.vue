<!-- =========================================================================================
    File Name: TheNavbarHorizontal.vue
    Description: 상단 가로 네비게이션을 정의합니다..

    - color : 네비게이션의 색상을 정의합니다.
    ----------------------------------------------------------------------------------------
    Author: 정보기술연구소 솔루션연구팀 LERNI members
    Author URL: https://lerni.kr
========================================================================================== -->
<template>
  <div class="flex items-center justify-center h-full">
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1>로그인</h1>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            id="username"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            id="password"
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="******************"
          />
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <lerni-button>로그인하기</lerni-button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            비밀번호 찾기
          </a>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 LDCC Corp. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  components: {},
  layout: 'full'
})
export default class Login extends Vue {
  @Prop(String)
  private readonly color!: string | undefined

  // data
  navbarColor: string = this.color ? 'bg-' + this.color : 'bg-primary'

  // computed

  // get exclamationMarks(): string {
  //   return Array(this.enthusiasm + 1).join('!')
  // }

  // methods

  //   increment(): void {
  //     this.enthusiasm++
  //   }

  //   decrement(): void {
  //     if (this.enthusiasm > 1) {
  //       this.enthusiasm--
  //     }
  //   }
}
</script>

<style></style>
