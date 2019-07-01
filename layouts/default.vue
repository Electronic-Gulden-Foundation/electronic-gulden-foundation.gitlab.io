<template>
  <b-container fluid>
    <div class="background-image-container">
      <div class="background-image-wrapper">
        <div
          class="background-image"
          :style="backgroundImageStyles"
        />
        <div class="background-image-overlay" />
      </div>
    </div>

    <b-container>
      <top-menu />
    </b-container>

    <b-container>
      <b-row>
        <nuxt />
      </b-row>
    </b-container>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import TopMenu from '~/components/navigation/TopMenu.vue'
import BackgroundImage from '~/assets/img/backgrounds/mill.png'

@Component({
  components: {
    TopMenu
  }
})
class Default extends Vue {
  backgroundImageStyles = {
    backgroundImage: `url(${BackgroundImage})`
  }
}

export default Default
</script>

<style lang="scss">
body {
  overflow-x: hidden;
  font-family: 'Source Sans Pro', sans-serif;
}

.background-image-container {
  position: absolute;

  width: 1000px;
  height: 1000px;

  top: -250px;
  right: -600px;

  .background-image-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;

    border-radius: 100px;
    transform: rotateZ(45deg);
    overflow: hidden;

    > div {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .background-image {
      background-repeat: no-repeat;
      background-size: cover;
      background-position-y: 50px;
      background-position-x: -200px;
      transform: scale(1.25) rotateZ(-45deg);
    }

    .background-image-overlay {
      background-image: linear-gradient(
        to top right,
        darken($efl-color, 10),
        $efl-color 25%,
        transparentize($efl-color, 0.15) 50%,
        $efl-color 75%,
        $efl-color 100%
      );
    }
  }
}
</style>
