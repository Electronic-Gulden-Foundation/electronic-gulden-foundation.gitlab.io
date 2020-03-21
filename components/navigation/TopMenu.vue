<template>
  <b-navbar>
    <b-navbar-brand :to="{ name: 'index' }">
      <b-img-lazy :src="Logo" />
    </b-navbar-brand>
  </b-navbar>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  import Logo from '~/assets/logo.png'

  @Component({
    name: 'TopMenu'
  })
  export default class TopMenu extends Vue {
    Logo = Logo
  }
</script>

<style lang="scss" scoped></style>
