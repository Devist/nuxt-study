<!-- =========================================================================================
    File Name: TheNavbarHorizontal.vue
    Description: 상단 가로 네비게이션을 정의합니다..

    - color : 네비게이션의 색상을 정의합니다.
    ----------------------------------------------------------------------------------------
    Author: 정보기술연구소 솔루션연구팀 LERNI members
    Author URL: https://lerni.kr
========================================================================================== -->
<template>
  <div class="lerni-navbar-horizontal" :class="navbarColor">
    <div class="lerni-navbar-wrapper navbar-full p-0 bg-primary text-primary">
      hi
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  components: {}
})
export default class Navbar extends Vue {
  @Prop(String)
  private color!: string | undefined

  // data
  navbarColor: string = this.color ? 'bg-' + this.color : 'bg-primary'

  // computed

  get exclamationMarks(): string {
    return Array(this.enthusiasm + 1).join('!')
  }

  // methods

  increment(): void {
    this.enthusiasm++
  }

  decrement(): void {
    if (this.enthusiasm > 1) {
      this.enthusiasm--
    }
  }
}
</script>

<style></style>
