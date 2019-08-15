<template>
  <div>
    <h3 class="title">
      {{ $t('exchanges.title') }}
    </h3>

    <div class="exchanges-wrapper">
      <div
        v-for="(exchange, index) in exchanges"
        :key="index"
        class="exchange"
        :class="exchange.class"
      >
        <a
          :href="exchange.href"
          target="_blank"
        >
          <div>
            <img
              :src="exchange.image"
              :alt="exchange.name"
            >
          </div>
          <div>
            <span class="exchange-name">{{ exchange.name }}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
class FrontPageExchanges extends Vue {
  exchanges = require('~/data/exchanges').default
}

export default FrontPageExchanges
</script>

<style lang="scss" scoped>
  .title {
    margin-top: 35px;
    margin-bottom: 25px;
    color: $gray-500;
  }

  .exchanges-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .exchange {
    flex: 1;
    text-align: center;

    img {
			padding: 15px;
			height: 115px;
    }
  }
</style>
