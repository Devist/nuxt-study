<template>
  <div>
    <the-navbar-horizontal color="primary" />
    <nuxt />
    <the-footer mode="sticky" :urls="urlList" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import TheNavbarHorizontal from '~/components/UI/navbar/TheNavbarHorizontal.vue'
import TheFooter from '~/components/UI/footer/TheFooter.vue'
import { globalStore } from '@/store'

@Component({
  components: {
    TheNavbarHorizontal,
    TheFooter
  }
})
export default class Default extends Vue {
  /**
   * DATA
   */

  private urlList: object = {
    privacyPolicy: 'https://google.com', // 개인정보 처리방침
    termsOfService: 'https://google.com', // 이용약관,
    introduce: 'https://lerni.kr' // 소개페이지
  }

  private mounted() {
    // width값 globalStore에 세팅
    window.addEventListener('resize', this.handleWindowResize)
    globalStore.UPDATE_WINDOW_WIDTH(window.innerWidth)
  }

  private beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize)
  }

  private handleWindowResize(event: any) {
    globalStore.UPDATE_WINDOW_WIDTH(event.currentTarget.innerWidth)
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
