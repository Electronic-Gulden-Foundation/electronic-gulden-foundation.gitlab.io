<template>
  <b-container>
    <b-row align-h="center">
      <b-col v-if="exists" cols="12" md="10" xl="8" class="wrapper">
        <h1 class="title mt-4">{{ title }}</h1>
        <h6 class="date mb-4">{{ day }}-{{ month }}-{{ year }}</h6>

        <div class="contents" v-html="contents" />

        <client-only>
          <div class="sharing">
            <h3>{{ $t('pages.news.share') }}</h3>

            <social-sharing :title="title" inline-template>
              <div>
                <network
                  v-for="network in $parent.socialNetworks"
                  class="social-sharing-network"
                  :class="network.id"
                  :key="network.id"
                  :network="network.id"
                >
                  <fa :icon="network.icon" />
                </network>
              </div>
            </social-sharing>
          </div>
        </client-only>
      </b-col>

      <b-col v-else class="text-center">
        <h3>{{ $t('pages.news.notFound') }}</h3>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import SocialSharing from 'vue-social-sharing'

import { Component, Vue } from 'vue-property-decorator'
import { getItemByLink, NewsItem } from '~/data/news'
import { faEnvelope } from '~/node_modules/@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faLinkedinIn,
  faTelegram,
  faTwitter,
  faWhatsapp
} from '~/node_modules/@fortawesome/free-brands-svg-icons'

@Component({
  components: {
    SocialSharing
  },
  head (this: Slug) {
    return {
      title: this.title
    }
  }
})
class Slug extends Vue {
  socialNetworks = [
    { id: 'email', icon: faEnvelope },
    { id: 'facebook', icon: faFacebook },
    { id: 'linkedin', icon: faLinkedinIn },
    { id: 'telegram', icon: faTelegram },
    { id: 'twitter', icon: faTwitter },
    { id: 'whatsapp', icon: faWhatsapp }
  ]

  get exists() {
    return this.item && this.contents
  }

  get contents(): string|undefined {
    if (this.item === undefined) return undefined

    try {
      return require(`~/data/news/items/${this.item.path}`).default
    } catch (e) {
      return undefined
    }
  }

  get title() {
    if (this.item === undefined) return undefined

    return this.item.title
  }

  get item(): NewsItem|undefined {
    return getItemByLink(this.$route.path)
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

<style lang="scss" scoped>
.contents {
  font-size: 1.4rem;
}

.wrapper {
  background-color: #fff;
}

/deep/ .social-sharing-network {
  font-size: 3em;
  margin: 15px;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }
}
</style>
