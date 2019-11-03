<template>
  <b-container fluid>
    <b-row>
      <b-container>
        <top-menu />
      </b-container>
    </b-row>

    <b-row>
      <nuxt />
    </b-row>

    <b-row>
      <footer-component class="mt-5" />
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import FooterComponent from '~/components/navigation/Footer.vue'
import TopMenu from '~/components/navigation/TopMenu.vue'

@Component({
  components: {
    TopMenu,
    FooterComponent
  }
})
class NoImage extends Vue  {
}

export default NoImage
</script>
