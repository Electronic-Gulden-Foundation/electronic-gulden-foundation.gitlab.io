<template>
  <div class="news-wrapper">
    <h2>{{ $t('recentNews.title') }}</h2>

    <div
      v-for="(news, index) in news"
      :key="index"
    >
      <a
        :href="news.text"
        class="news-item"
        target="_blank"
      >
        <div class="news-title-wrapper">
          {{ news.title }}
        </div>
        <div class="news-icon-wrapper">
          <fa :icon="goToNewsIcon" />
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { getAllNewsItems } from '~/locales/news/index.ts'

@Component
class News extends Vue {
	goToNewsIcon = faArrowRight
  news = getAllNewsItems()
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
	}
}
</style>
