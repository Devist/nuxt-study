<!-- =========================================================================================
    File Name: LerniButton.vue
    Description: 버튼 컴포넌트 정의합니다.

    - size : 버튼의 사이즈를 결정합니다. (default : medium)
      - large :
      - small :
      - default : 

    - color : 버튼의 색상을 정의합니다.

    - text-color : 버튼 내의 글씨 색상을 정의합니다.

    - type : 버튼의 타입을 결정합니다.
      - filled : defualt
      - border:
      - flat :
      - line : 


    ----------------------------------------------------------------------------------------
    Author: 정보기술연구소 솔루션연구팀 LERNI members
    Author URL: https://lerni.kr
========================================================================================== -->
<template>
  <button class="btn" :class="buttonColor" v-on="listeners">
    <slot />
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  components: {}
})
export default class LerniButton extends Vue {
  @Prop(String)
  private to!: string | undefined

  @Prop(String)
  private color!: string | undefined

  // data
  buttonColor: string = this.color ? 'bg-' + this.color : 'bg-primary'

  // computed

  // methods
}
</script>

<style lang="scss" scoped>
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
</style>
