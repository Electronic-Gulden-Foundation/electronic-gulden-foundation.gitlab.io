<template>
  <b-container>
    <b-row align-h="center">
      <b-col v-if="exists" cols="12" md="10" xl="8" class="wrapper">
        <h1 class="mt-4">{{ title }}</h1>
        <h6 class="date mb-4">{{ day }}-{{ month }}-{{ year }}</h6>

        <div class="contents" v-html="contents" />
      </b-col>

      <b-col v-else class="text-center">
        <h3>Niet gevonden :(</h3>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
})
class Slug extends Vue {
  get exists() {
    return this.module !== undefined
  }

  get contents () {
    return this.module.default
  }

  get title() {
    return this.slug
  }

  get module() {
    try {
      return require(`~/data/news/items/${this.year}/${this.month}/${this.day}/${this.slug}.md`)
    } catch (e) {
      return undefined
    }
  }

  get year() {
    return this.$route.params.year
  }

  get month() {
    return this.$route.params.month
  }

  get day() {
    return this.$route.params.day
  }

  get slug() {
    return this.$route.params.slug
  }
}

export default Slug
</script>

<style lang="scss">
.contents {
  font-size: 1.4rem;
}

.wrapper {
  background-color: #fff;
}
</style>
