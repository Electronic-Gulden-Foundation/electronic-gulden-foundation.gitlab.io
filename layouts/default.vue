<template>
  <default-layout>
    <nuxt />
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
  export default class Default extends Vue {
  }
</script>
