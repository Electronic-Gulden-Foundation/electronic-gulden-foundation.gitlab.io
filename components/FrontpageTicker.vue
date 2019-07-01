<template>
  <div class="ticker-info">
    <div>
      <dt>{{ $t('ticker.symbol') }}</dt>
      <dd>{{ tickerInfo && tickerInfo.symbol }}</dd>
    </div>

    <div>
      <dt>{{ $t('ticker.price_btc') }}</dt>
      <dd>₿ {{ tickerInfo && tickerInfo.price_btc }}</dd>
    </div>

    <div>
      <dt>{{ $t('ticker.price_eur') }}</dt>
      <dd>
        {{ tickerInfo && $n(tickerInfo.price_eur, 'currency-eur-detailed') }}
      </dd>
    </div>

    <div>
      <dt>{{ $t('ticker.market_cap_eur') }}</dt>
      <dd>{{ tickerInfo && $n(tickerInfo.market_cap_eur, 'currency-eur') }}</dd>
    </div>

    <div>
      <dt>{{ $t('ticker.24h_volume_eur') }}</dt>
      <dd>
        {{ tickerInfo && $n(tickerInfo['24h_volume_eur'], 'currency-eur') }}
      </dd>
    </div>
  </div>
</template>

<script lang="ts">
import TickerMixin, {TickerInfo} from '~/components/mixins/TickerMixin'
import {Component, Mixins} from 'vue-property-decorator'

@Component
class FrontpageTicker extends Mixins(TickerMixin) {
  tickerInfo: TickerInfo | null = null

  mounted() {
    this.loadTickerInfo()
  }

  async loadTickerInfo() {
    this.tickerInfo = await this.getTickerInfo()
  }
}

export default FrontpageTicker
</script>

<style lang="scss" scoped>
.ticker-info {
  display: flex;
  justify-content: space-between;

  dt {
    text-transform: uppercase;
    color: $gray-500;
    font-weight: 400;
    padding: 10px 0;
  }
}
</style>
