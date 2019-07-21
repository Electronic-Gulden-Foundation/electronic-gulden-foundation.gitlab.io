<template>
  <b-carousel
    id="mission-statements-carousel"
    class="mission-statements"
    controls
    indicators
  >
    <b-carousel-slide
      v-for="(statement, index) in $t('missionStatement.statements')"
      :key="index"
      class="statement"
      img-blank
    >
      <div
        slot="img"
        class="d-flex w-100 text-center justify-content-center align-items-center"
        style="height: 230px;"
      >
        <div class="d-inline-block w-75">
          <h3>{{ statement.title }}</h3>
          <p>{{ statement.text }}</p>
        </div>
      </div>
    </b-carousel-slide>
  </b-carousel>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
class FrontPageCarousel extends Vue {}

export default FrontPageCarousel
</script>

<style lang="scss" scoped>
.mission-statements,
.mission-statement {
  @include efl-orange-gradient-background;

  .mission-statement-text {
    padding: 25px;
  }
}
</style>
