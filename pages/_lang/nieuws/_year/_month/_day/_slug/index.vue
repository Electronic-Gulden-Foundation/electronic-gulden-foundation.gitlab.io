<template>
  <b-container class="wrapper">
    <b-row>
      <b-col v-if="exists">
        <h1 class="title mt-4">
          {{ title }}
        </h1>
        <h6 class="date mb-4">
          {{ day }}-{{ month }}-{{ year }}
        </h6>

        <div class="contents" v-html="contents" />

        <client-only>
          <div class="sharing">
            <h3>{{ $t('pages.news.share') }}</h3>

            <social-sharing :title="title" inline-template>
              <div>
                <network
                  v-for="network in $parent.socialNetworks"
                  :key="network.id"
                  class="social-sharing-network"
                  :class="network.id"
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

    <b-row class="other-news-items">
      <b-col class="previous-news-item">
        <template v-if="previousNewsItem">
          <component
            :is="previousNewsItem.isExternalLink ? 'a' : 'nuxt-link'"
            :to="previousNewsItem.link"
            :href="previousNewsItem.link"
            class="news-item"
            :target="previousNewsItem.isExternalLink ? '_blank' : '_self'"
          >
            <div class="news-icon-wrapper">
              <fa :icon="previousNewsIcon" />
            </div>
            <div class="news-title-wrapper">
              {{ previousNewsItem.title }}
            </div>
          </component>
        </template>
      </b-col>

      <b-col class="next-news-item">
        <template v-if="nextNewsItem">
          <component
            :is="nextNewsItem.isExternalLink ? 'a' : 'nuxt-link'"
            :to="nextNewsItem.link"
            :href="nextNewsItem.link"
            class="news-item"
            :target="nextNewsItem.isExternalLink ? '_blank' : '_self'"
          >
            <div class="news-title-wrapper">
              {{ nextNewsItem.title }}
            </div>
            <div class="news-icon-wrapper">
              <fa :icon="nextNewsIcon" />
            </div>
          </component>
        </template>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
  import SocialSharing from 'vue-social-sharing'

  import { Component, Vue } from 'vue-property-decorator'
  import { getItemByLink, getNextNewsItem, getPreviousNewsItem, NewsItem } from '~/data/news'
  import { faArrowLeft, faArrowRight, faEnvelope } from '~/node_modules/@fortawesome/free-solid-svg-icons'
  import {
    faFacebook,
    faLinkedinIn,
    faTelegram,
    faTwitter,
    faWhatsapp
  } from '~/node_modules/@fortawesome/free-brands-svg-icons'

  @Component({
    layout: 'thin',
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

    nextNewsIcon = faArrowRight
    previousNewsIcon = faArrowLeft

    get exists () {
      return this.item && this.contents
    }

    get contents (): string | undefined {
      if (this.item === undefined) {
        return undefined
      }

      try {
        return require(`~/data/news/items/${this.item.path}`).default
      } catch (e) {
        return undefined
      }
    }

    get title () {
      if (this.item === undefined) {
        return undefined
      }

      return this.item.title
    }

    get item (): NewsItem | undefined {
      return getItemByLink(this.$route.path)
    }

    get year () {
      return this.$route.params.year
    }

    get month () {
      return this.$route.params.month
    }

    get day () {
      return this.$route.params.day
    }

    get slug () {
      return this.$route.params.slug
    }

    get nextNewsItem () {
      return this.item ? getNextNewsItem(this.item) : undefined
    }

    get previousNewsItem () {
      return this.item ? getPreviousNewsItem(this.item) : undefined
    }
  }

  export default Slug
</script>

<style lang="scss" scoped>
  .contents {
    font-size: 1.4rem;
  }

  .wrapper {
    border-radius: 2px;
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

  .other-news-items {
    margin-top: 25px;
    padding-top: 25px;
    border-top: 1px solid rgba(0, 0, 0, 0.125);

    .news-item {
      display: flex;
      padding: 15px 0;
      font-size: 1.2rem;
      justify-content: space-between;
      align-items: center;

      .news-icon-wrapper {
        padding: 0 15px;
      }
    }

    .previous-news-item {
      text-align: right;
    }
  }
</style>
