<template>
  <div class="lerni-navbar-horizontal" :class="navbarBgColor">
    <div class="lerni-navbar-wrapper navbar-full p-0 bg-primary text-primary">
      hi
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

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

  get navbarBgColor(): string {
    console.log(this.navbarColor)
    return this.navbarColor
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
