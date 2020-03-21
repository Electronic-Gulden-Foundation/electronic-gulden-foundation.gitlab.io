<template>
  <default-layout>
    <b-container>
      <b-row class="justify-content-center">
        <b-col sm="12" md="10" xl="8">
          <b-row>
            <nuxt />
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </default-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DefaultLayout from '~/components/layouts/default.vue'

  @Component({
    components: {
      DefaultLayout
    }
  })
export default class Thin extends Vue {
}
</script>
