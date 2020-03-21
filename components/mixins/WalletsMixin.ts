import { Component, Vue } from 'vue-property-decorator'
import { faAndroid, faApple, faLinux, faRaspberryPi, faWindows } from '@fortawesome/free-brands-svg-icons'
import { faFileArchive } from '@fortawesome/free-solid-svg-icons'

@Component
class WalletsMixin extends Vue {
  baseUrl =
    'https://github.com/Electronic-Gulden-Foundation/egulden/releases/download'

  version = 'v1.4.3.2'

  walletVersions = {
    'Windows 64-bits': {
      name: 'Windows 64-bits',
      href: `${this.baseUrl}/${this.version}/egulden-1.4.3-win64-setup.exe`,
      icon: faWindows
    },
    'Windows 32-bits': {
      name: 'Windows 32-bits',
      href: `${this.baseUrl}/${this.version}/egulden-1.4.3-win32-setup.exe`,
      icon: faWindows
    },
    'Mac OS': {
      name: 'Mac OS',
      href: `${this.baseUrl}/${this.version}/e-Gulden-Core.dmg`,
      icon: faApple
    },
    Android: {
      name: 'Android',
      href: 'https://play.google.com/store/apps/details?id=com.coinomi.wallet',
      icon: faAndroid
    },
    iOS: {
      name: 'iOS',
      href: 'https://apps.apple.com/nl/app/coinomi-wallet/id1333588809',
      icon: faApple
    },
    'Linux 64-bits': {
      name: 'Linux 64-bits',
      href: `${this.baseUrl}/${this.version}/linux-64-1.4.3.2.tar.xz`,
      icon: faLinux
    },
    'Linux 32-bits': {
      name: 'Linux 32-bits',
      href: `${this.baseUrl}/${this.version}/linux-32-1.4.3.2.tar.xz`,
      icon: faLinux
    },
    'Linux ARM': {
      name: 'Linux ARM',
      href: `${this.baseUrl}/${this.version}/linux-arm-1.4.3.2.tar.xz`,
      icon: faRaspberryPi
    },
    Source: {
      name: 'Broncode',
      href: `https://github.com/Electronic-Gulden-Foundation/egulden/archive/${this.version}.tar.gz`,
      icon: faFileArchive
    }
  }

  public get bestMatchingWalletVersion (): object {
    // @ts-ignore
    if (!process.browser) {
      return {}
    }

    const platform = window.navigator.platform
    const userAgent = window.navigator.userAgent

    if (userAgent.includes('Android')) {
      return this.walletVersions.Android
    }

    if (userAgent.includes('iPhone') || userAgent.includes('iPad')) {
      return this.walletVersions.iOS
    }

    const isX64 = userAgent.includes('x64') || userAgent.includes('x86_64')
    const isX32 =
      userAgent.includes('x32') ||
      userAgent.includes('i686') ||
      userAgent.includes('x86')

    if (platform.includes('Linux')) {
      if (isX64) {
        return this.walletVersions['Linux 64-bits']
      }
      if (isX32) {
        return this.walletVersions['Linux 32-bits']
      }

      return this.walletVersions['Linux 64-bits']
    }

    if (platform.includes('Win')) {
      if (isX64) {
        return this.walletVersions['Windows 64-bits']
      }
      if (isX32) {
        return this.walletVersions['Windows 32-bits']
      }

      return this.walletVersions['Windows 64-bits']
    }

    if (platform.includes('Mac')) {
      return this.walletVersions['Mac OS']
    }

    return this.walletVersions['Windows 64-bits']
  }
}

export default WalletsMixin
