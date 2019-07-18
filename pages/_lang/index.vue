<template>
  <b-container fluid>
    <b-row>
      <b-container>
        <b-row
          class="title-wrapper mb-4"
          align-v="center"
        >
          <b-col md="6" class="title-background">
            <h1
              class="title"
              v-html="$t('pages.index.title')"
            />

            <b-row>
              <b-col sm="6">
                <div class="title-divider" />
              </b-col>
            </b-row>

            <h2 class="subtitle">
              {{ $t('pages.index.subtitle') }}
            </h2>
          </b-col>

          <b-col md="6">
            <div class="laptop-display-wrapper">
              <div
                class="laptop-display"
                :style="laptopDisplayStyles"
              />

              <fa
                :icon="laptopPlayIcon"
                class="play-icon"
                v-b-modal.playVideoModal
              />

              <b-modal
                id="playVideoModal"
                hide-header
                hide-footer
                body-class="p-0"
                size="lg"
              >
                <div class="video-wrapper">
                  <b-embed
                    type="iframe"
                    :src="laptopVideoUrl"
                    allowfullscreen
                  />
                </div>
              </b-modal>
            </div>
          </b-col>
        </b-row>

        <b-row class="row-margin">
          <b-col class="py-4">
            <front-page-carousel />
          </b-col>
        </b-row>

        <b-row class="row-margin">
          <b-col>
            <front-page-social-media />
          </b-col>
        </b-row>

        <b-row class="row-margin">
          <b-col>
            <front-page-ticker />
          </b-col>
        </b-row>

        <b-row class="row-margin">
          <b-col sm="4">
            <front-page-exchanges />
          </b-col>

          <b-col
            class="wallet-download-background"
            sm="8"
          >
            <front-page-wallet-download />
          </b-col>
        </b-row>
      </b-container>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

import FrontPageCarousel from '~/components/frontpage/FrontPageCarousel.vue'
import FrontPageExchanges from '~/components/frontpage/FrontPageExchanges.vue'
import FrontPageSocialMedia from '~/components/frontpage/FrontPageSocialMedia.vue'
import FrontPageTicker from '~/components/frontpage/FrontPageTicker.vue'
import FrontPageWalletDownload from '~/components/frontpage/FrontPageWalletDownload.vue'

import Laptop from '~/assets/img/laptop.png'
import MissionStatementText from '~/locales/text/missie.md'

@Component({
  components: {
    FrontPageCarousel,
    FrontPageExchanges,
    FrontPageSocialMedia,
    FrontPageTicker,
    FrontPageWalletDownload
  }
})
class Index extends Vue {
  laptopDisplayStyles = {
    backgroundImage: `url(${Laptop})`,
    width: Laptop.width,
    height: Laptop.height
  }

  MissionStatementText = MissionStatementText

  laptopPlayIcon = faPlayCircle
  laptopVideoUrl = "https://www.youtube-nocookie.com/embed/BtWSWYBH4TE?autoplay=1"
}

export default Index
</script>

<style lang="scss" scoped>
.title-wrapper {
  margin-top: 150px;

  .title-background {
    background-color: #fff;
    padding: 15px;
    margin-bottom: 15px;
  }

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

  .play-icon {
    $size: 125px;

    position: absolute;
    top: calc(50% - #{$size / 2});
    left: calc(50% - #{$size / 2});

    vertical-align: middle;
    font-size: $size;
    color: $gray-200;
    cursor: pointer;
    z-index: 1000;
  }
}

.wallet-download-background {
  background-color: $efl-blue;
  color: #fff;
}

#playVideoModal {
  /deep/ .modal-body {
    background-color: transparent;
    padding: none;
  }
}

.row-margin {
  margin-top: 50px;
}
</style>
