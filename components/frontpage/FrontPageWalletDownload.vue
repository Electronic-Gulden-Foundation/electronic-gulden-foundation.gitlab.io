<template>
  <div>
    <h4 class="title">
      {{ $t('wallets.title') }}
    </h4>

    <div class="wallets-content">
      <div class="versions-wrapper">
        <a
          v-for="(version, index) in walletVersions"
          :key="index"
          :href="version.href"
          target="_blank"
          class="wallet-version"
        >
          <fa
            class="icon"
            :icon="version.icon"
          />
          <div class="text">{{ version.name }}</div>
        </a>
      </div>

      <div class="phone-image-wrapper">
        <div
          class="phone-image"
          :style="{ 'backgroundImage': `url('${coinomiPhoneImage}')` }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'

import WalletsMixin from '~/components/mixins/WalletsMixin'

import CoinomiPhoneImage from '@/assets/img/coinomi.png'

@Component
class FrontPageWalletDownload extends Mixins(WalletsMixin) {
  coinomiPhoneImage = CoinomiPhoneImage
}

export default FrontPageWalletDownload
</script>

<style lang="scss" scoped>
$version-margins: 25px;
$version-margin-bottom: 20px;

.title {
  margin-top: 35px;
  margin-bottom: 25px;
}

.wallets-content {
  display: flex;
}

.versions-wrapper {
  width: 50%;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  .wallet-version {
    margin-bottom: $version-margin-bottom;
    width: calc(1 / 2 * 100% - (1 - 1 / 2) * #{$version-margins});

    color: inherit;
    padding: 25px 20px;
    border: 1px solid #fff;
    border-radius: 3px;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: space-between;

    transition: box-shadow 200ms;

    .icon {
      vertical-align: middle;
      font-size: 2rem;
      margin-right: 15px;
    }

    .text {
      flex-grow: 1;
      vertical-align: middle;
    }

    &:hover {
      box-shadow: 0 0 3px rgba(255, 255, 255, 0.8);
    }
  }
}

.phone-image-wrapper {
  width: 50%;
  margin-left: 30px;
  position: relative;

  .phone-image {
    position: absolute;
    top: -120px;
    left: 0;
    right: 0;
    border: 5px solid black;
    border-top-width: 40px;
    border-bottom-width: 50px;
    border-radius: 30px;

    min-height: 650px;

    background-size: cover;
    background-repeat: no-repeat;
  }
}

@include media-breakpoint-down(md) {
  .versions-wrapper {
    width: 100%;
  }

  .phone-image-wrapper {
    display: none;
  }
}
</style>
