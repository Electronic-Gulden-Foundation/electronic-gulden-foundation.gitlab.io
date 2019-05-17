<template>
  <b-container>
    <b-row class="title-wrapper" align-v="center">
      <b-col md="6">
        <h1 class="title" v-html="$t('pages.index.title')" />

        <b-row>
          <b-col sm="6">
            <div class="title-divider" />
          </b-col>
        </b-row>

        <h2 class="subtitle">{{ $t('pages.index.subtitle') }}</h2>
      </b-col>

      <b-col md="6">
        <div class="laptop-display-wrapper">
          <div class="laptop-display" :style="laptopDisplayStyles" />

          <blockquote class="laptop-text">
            {{ $t('pages.index.laptopText') }}
          </blockquote>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Laptop from '~/assets/img/laptop.png'

@Component({
  name: 'index'
})
class Index extends Vue {
  laptopDisplayStyles = {
    backgroundImage: `url(${Laptop})`,
    width: Laptop.width,
    height: Laptop.height
  }
}

export default Index
</script>

<style lang="scss" scoped>
.title-wrapper {
  margin-top: 150px;

  .title {
    color: $efl-color;
    font-weight: 300;
    margin-bottom: 0;
  }

  .title-divider {
    padding-top: 1.2rem;
    margin-bottom: 1.2rem;
    border-bottom: 2px solid $efl-color;
  }

  .subtitle {
    font-size: 1.1rem;
    color: $gray-500;
    text-transform: uppercase;
    font-weight: 600;
  }
}

.laptop-display-wrapper {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25%;

  .laptop-display {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .laptop-text {
    background-color: #fff;
    border-radius: 3px;
    padding: 15px 20px;
    border: 1px solid $gray-200;
    border-top-width: 10px;
    font-style: italic;
    color: $gray-500;
    font-size: 1.2rem;
  }
}
</style>
