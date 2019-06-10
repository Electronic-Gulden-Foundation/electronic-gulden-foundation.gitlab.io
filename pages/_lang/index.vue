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

    <b-row>
      <b-col class="mission-statement">
        <div class="mission-statement-text" v-html="MissionStatementText" />
      </b-col>

      <b-col class="recent-news" />
    </b-row>

    <b-row class="social-media my-4">
      <b-col cols="3" class="social-media">
        <span class="social-media-text">
          {{ $t('socialMedia.talkWithUs')}}
        </span>
      </b-col>

      <b-col v-for="(item, index) in socialMediaItems"
             :key="index"
             class="social-media"
             :class="item.class">
        <a :href="item.href">
          <fa :icon="item.icon" />
          <span>{{ $t(item.name) }}</span>
        </a>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <frontpage-ticker />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import FrontpageTicker from '~/components/FrontpageTicker.vue'
import Laptop from '~/assets/img/laptop.png'
import MissionStatementText from '~/locales/text/missie.md'
import { faFacebookSquare, faReddit, faTwitter, faYoutube } from '~/node_modules/@fortawesome/free-brands-svg-icons'

@Component({
  components: {
    FrontpageTicker
  }
})
class Index extends Vue {
  laptopDisplayStyles = {
    backgroundImage: `url(${Laptop})`,
    width: Laptop.width,
    height: Laptop.height
  }

  MissionStatementText = MissionStatementText

  socialMediaItems = [
    {
      name: 'socialMedia.facebook',
      icon: faFacebookSquare,
      class: ['facebook'],
      href: 'https://www.facebook.com/EFLFoundation/'
    },
    {
      name: 'socialMedia.twitter',
      icon: faTwitter,
      class: ['twitter'],
      href: 'https://twitter.com/ElecGulden'
    },
    {
      name: 'socialMedia.youtube',
      icon: faYoutube,
      class: ['youtube'],

    },
    {
      name: 'socialMedia.reddit',
      icon: faReddit,
      class: ['reddit'],
      href: 'https://www.reddit.com/r/eflfoundation'
    }
  ]
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

.mission-statement {
  background-image: linear-gradient(
    to right,
    darken($efl-color, 10),
    lighten($efl-color, 10)
  );

  .mission-statement-text {
    padding: 25px;
    color: #fff;
  }
}

.social-media {
  .social-media-text {
    color: $gray-500;
    text-transform: uppercase;
    font-weight: 600;
  }
}
</style>
