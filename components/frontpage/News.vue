<template>
  <div class="news-wrapper">
    <h2>{{ $t('recentNews.title') }}</h2>

    <div
      v-for="(news, index) in allNews"
      :key="news.slug"
    >
      <component
        :is="news.isExternalLink ? 'a' : 'nuxt-link'"
        :to="news.link"
        :href="news.link"
        class="news-item"
        :class="{ 'last': index === allNews.length - 1 }"
        :target="news.isExternalLink ? '_blank' : '_self'"
      >
        <div class="news-title-wrapper">
          {{ news.title }}
        </div>
        <div class="news-icon-wrapper">
          <fa :icon="goToNewsIcon" />
        </div>
      </component>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { getLatestNewsItems, NewsItem } from '~/data/news'

const NEWS_ITEM_LIMIT = 10

@Component
class News extends Vue {
	goToNewsIcon = faArrowRight

	get allNews (): NewsItem[] {
	  return getLatestNewsItems(NEWS_ITEM_LIMIT)
	}
}

export default News
</script>

<style lang="scss" scoped>
.news-wrapper {
	padding-top: 25px;

	.news-item {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid $gray-400;
		padding: 15px 0;
		font-size: 1.2rem;

    &.last {
      border-bottom: none;
    }
	}
}
</style>
