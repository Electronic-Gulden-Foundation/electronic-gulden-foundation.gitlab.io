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
  exchanges = [
    {
      name: 'Altilly',
      href: 'https://www.altilly.com/market/EFL_BTC',
      image: 'https://pbs.twimg.com/profile_images/1069218760509145090/-oNvv4Hj_400x400.jpg'
    },
    {
      name: 'Novaexchange',
      href: 'https://novaexchange.com/market/BTC_EFL/',
      image: 'https://pbs.twimg.com/profile_images/1045596482513055747/ozE-hjtP_400x400.jpg'
    },
    {
      name: 'Altmarkets.io',
      href: 'https://altmarkets.io/trading/eflbtc',
      image: 'https://pbs.twimg.com/profile_images/1092886025301618690/Xj-S4aBj_400x400.jpg'
    }
  ]
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
      width: 125px;
    }
  }
</style>
