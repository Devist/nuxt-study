<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: 하단 Footer를 정의합니다.

    - color : footer의 배경 색상을 정의합니다.
    - mode : footer의 모드를 설정합니다.
        - sticky : 푸터가 계속 하단에 노출됩니다.
        - hidden : 푸터를 보여주지 않습니다.
    ----------------------------------------------------------------------------------------
    Author: 정보기술연구소 솔루션연구팀 LERNI members
    Author URL: https://lerni.kr
========================================================================================== -->
<template>
  <div :class="[footerMode]">
    <div class="the-footer" :class="[footerColor]">
      <span>
        COPYRIGHT @ {{ new Date().getFullYear() }}
        <a href="https://lerni.kr" target="_blank" rel="nofollow">LERNI</a>, All
        rights Reserved
      </span>
      <span class="lerni-footer">
        <!-- 서비스 이용 약관 -->
        <a
          href=" https://lerni.kr/privacy-policy/"
          target="_blank"
          rel="nofollow"
          >이용약관</a
        >

        <!-- 개인정보 처리방침 -->
        <a
          v-if="urls.privacyPolicy"
          class="font-bold"
          :href="urls.privacyPolicy"
          target="_blank"
          rel="nofollow"
          >개인정보 처리방침 |
        </a>

        <a
          v-if="urls.introduce"
          :href="urls.introduce"
          target="_blank"
          rel="nofollow"
          >러니소개 |</a
        >

        <a
          href="https://lerni.kr/%eb%89%b4%ec%8a%a4%eb%a0%88%ed%84%b0/"
          target="_blank"
          rel="nofollow"
          >공지사항 |</a
        >

        <a href="https://lerni.kr/faqs/" target="_blank" rel="nofollow">FAQ</a>
      </span>
      <span class="md:flex hidden items-center">
        <span>Made with</span>
        <span class="ml-1">LERNI</span>
        <!-- <feather-icon
          icon="HeartIcon"
          svg-classes="stroke-current text-danger w-6 h-6"
          class="ml-1"
        /> -->
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  components: {}
})
export default class Default extends Vue {
  @Prop(String)
  private color!: string | undefined

  @Prop(String)
  private mode!: string | undefined

  @Prop({
    default: {
      privacyPolicy: '', // 개인정보 처리방침
      termsOfService: '', // 이용약관,
      introduce: '' // 소개페이지
    }
  })
  private urls!: object

  // data
  footerColor: string = this.color ? 'bg-' + this.color : 'bg-primary'

  get footerMode(): string {
    switch (this.mode) {
      case 'sticky':
        return 'footer-sticky'
      case 'hidden':
        return 'footer-hidden'
      default:
        return 'footer-sticky'
    }
  }
}
</script>

<style scoped>
.lerni-footer {
  word-break: keep-all;
}
</style>
