<template>
  <div>
    <h4 class="title">
      {{ $t('wallets.title') }}
    </h4>

    <div class="versions-wrapper">
      <a
        v-for="(version, index) in versions"
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
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import {
  faAndroid,
  faApple,
  faLinux,
  faRaspberryPi,
  faWindows
} from '@fortawesome/free-brands-svg-icons'
import { faFileArchive } from '@fortawesome/free-solid-svg-icons'

@Component
class FrontPageWalletDownload {

  private baseUrl: string = 'https://github.com/Electronic-Gulden-Foundation/egulden/releases/download'
  private version: string = 'v1.4.3.2'

  versions = [
    {
      name: 'Windows 64-bit',
      href: `${this.baseUrl}/${this.version}/egulden-1.4.3-win64-setup.exe`,
      icon: faWindows
    },
    {
      name: 'Windows 32-bit',
      href: `${this.baseUrl}/${this.version}/egulden-1.4.3-win32-setup.exe`,
      icon: faWindows
    },
    {
      name: 'Mac OS',
      href: `${this.baseUrl}/${this.version}/e-Gulden-Core.dmg`,
      icon: faApple
    },
    {
      name: 'Android',
      href: 'https://play.google.com/store/apps/details?id=com.coinomi.wallet',
      icon: faAndroid
    },
    {
      name: 'iOS',
      href: 'https://apps.apple.com/nl/app/coinomi-wallet/id1333588809',
      icon: faApple
    },
    {
      name: 'Linux 64-bit',
      href: `${this.baseUrl}/${this.version}/linux-64-1.4.3.2.tar.xz`,
      icon: faLinux
    },
    {
      name: 'Linux 32-bit',
      href: `${this.baseUrl}/${this.version}/linux-32-1.4.3.2.tar.xz`,
      icon: faLinux
    },
    {
      name: 'Linux ARM',
      href: `${this.baseUrl}/${this.version}/linux-arm-1.4.3.2.tar.xz`,
      icon: faRaspberryPi
    },
    {
      name: 'Broncode',
      href: `https://github.com/Electronic-Gulden-Foundation/egulden/archive/${this.version}.tar.gz`,
      icon: faFileArchive
    }
  ]
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

.versions-wrapper {
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
</style>
