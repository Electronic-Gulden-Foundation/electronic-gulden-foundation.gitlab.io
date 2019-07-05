<template>
  <div class="social-media-wrapper">
    <div class="social-media-text">
      {{ $t('socialMedia.talkWithUs') }}
    </div>

    <div
      v-for="(item, index) in socialMediaItems"
      :key="index"
      class="social-media"
      :class="item.class"
    >
      <a :href="item.href">
        <fa
          class="icon"
          :icon="item.icon"
        />
        <span class="name">{{ $t(item.name) }}</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  faFacebookSquare,
  faReddit,
  faTwitter
} from '~/node_modules/@fortawesome/free-brands-svg-icons'

@Component
class FrontPageSocialMedia extends Vue {
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
      name: 'socialMedia.reddit',
      icon: faReddit,
      class: ['reddit'],
      href: 'https://www.reddit.com/r/eflfoundation'
    }
  ]
}

export default FrontPageSocialMedia;
</script>

<style lang="scss" scoped>
.social-media-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: $gray-500;
  font-size: 1.4rem;

  > div {
    flex: 1;
  }

  .social-media-text {
    flex: 2;
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: 600;
  }

  .social-media {
    a {
      color: inherit;
      text-decoration: none;
    }

    .name {
      vertical-align: middle;
    }

    .icon {
      vertical-align: middle;
      margin-right: 5px;
      font-size: 1.8rem;
    }

    &.facebook .icon {
      color: #3b5998;
    }
    &.twitter .icon {
      color: #1da1f2;
    }
    &.reddit .icon {
      color: #ff4500;
    }
  }
}
</style>
