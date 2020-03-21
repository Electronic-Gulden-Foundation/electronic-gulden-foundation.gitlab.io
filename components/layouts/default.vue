<template>
  <b-container fluid>
    <div class="background-image-container">
      <div class="background-image-wrapper">
        <div class="background-image" />
        <div class="background-image-overlay" />
      </div>
    </div>

    <b-row>
      <b-container>
        <top-menu />
      </b-container>
    </b-row>

    <b-row>
      <slot />
    </b-row>

    <b-row>
      <footer-component class="mt-5" />
    </b-row>

    <client-only>
      <cookie-law
        :button-text="$t('cookieLaw.buttonText')"
        :message="$t('cookieLaw.message')"
        button-class="btn px-4 py-2 btn-primary"
        @accept="handleAcceptCookies"
      />
    </client-only>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CookieLaw from 'vue-cookie-law'

import FooterComponent from '~/components/navigation/Footer.vue'
import TopMenu from '~/components/navigation/TopMenu.vue'

  @Component({
    components: {
      TopMenu,
      FooterComponent,
      CookieLaw
    },
    head (this: Default) {
      return {
        titleTemplate: this.$t('layouts.default.head.titleTemplate').toString()
      }
    }
  })
class Default extends Vue {
    $matomo!: any | undefined

    handleAcceptCookies () {
      this.$matomo && this.$matomo.rememberConsentGiven()
    }
  }

export default Default
</script>

<style lang="scss">
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
      z-index: -1;

      > div {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }

      .background-image {
        background-image: url('~assets/img/backgrounds/mill.jpeg');
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
