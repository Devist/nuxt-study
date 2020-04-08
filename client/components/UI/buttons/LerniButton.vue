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
  <button class="btn" :class="buttonColor">
    <slot />
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class LerniButton extends Vue {
  /** 버튼의 기능이 단순히 사이트 내의 이동이라면,<br>
   *  to  프로퍼티를 사용하여 버튼 클릭시 이동하도록 동작시킬 수 있습니다. */
  @Prop(String)
  to!: string | undefined

  /** 색상 속성 및 색상 값 (예 : #fff, rgba (100,10,5) 또는 프로젝트의 기본 색상)을 사용하여 <br>
   *  Button 구성 요소의 색상을 변경하면 구성 요소에만 영향을 미치며 동적 일 수 있습니다. */
  @Prop(String)
  color!: string | undefined

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
