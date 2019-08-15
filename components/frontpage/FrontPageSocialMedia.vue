<template>
  <div class="social-media-wrapper">
    <div class="social-media-text d-none d-sm-block">
      {{ $t('socialMedia.talkWithUs') }}
    </div>

    <div
      v-for="(item, index) in socialMediaItems"
      :key="index"
      class="social-media text-center"
      :class="item.class"
    >
      <a
        :href="item.href"
        target="_blank"
      >
        <div class="icon-wrapper d-block d-sm-inline">
          <fa
            class="icon"
            :icon="item.icon"
          />
        </div>

        <span class="name">{{ item.name }}</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import SocialMediaItems from '~/data/social-media'


@Component
class FrontPageSocialMedia extends Vue {
  socialMediaItems = SocialMediaItems.filter(i => i.frontPage)
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
