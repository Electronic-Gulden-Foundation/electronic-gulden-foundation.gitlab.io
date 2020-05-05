<template>
  <b-navbar toggleable="md">
    <b-navbar-brand :to="{ name: 'index' }">
      <b-img-lazy :src="Logo"/>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"/>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="{ name: 'team' }" class="px-3">
          Team
        </b-nav-item>

        <b-nav-item :to="{ name: 'zoeken' }" class="search">
          <fa :icon="searchIcon"/>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { faSearch } from '@fortawesome/free-solid-svg-icons'

  import Logo from '~/assets/logo.png'

  @Component({
    name: 'TopMenu'
  })
  export default class TopMenu extends Vue {
    Logo = Logo

    searchIcon = faSearch
  }
</script>

<style lang="scss" scoped>
  /deep/ .navbar-nav {
    .navbar-brand img {
      height: 75px;
    }

    .nav-item {
      font-size: 1.2rem;

      &.search .nav-link {
        font-size: 1.4rem;
      }
    }
  }
</style>
