<template>
  <div class="ticker-info">
    <div>
      <dt>{{ $t('ticker.symbol') }}</dt>
      <dd>{{ tickerInfo && tickerInfo.symbol }}</dd>
    </div>

    <div>
      <dt>{{ $t('ticker.priceBtc') }}</dt>
      <dd>₿ {{ tickerInfo && tickerInfo.priceBtc }}</dd>
    </div>

    <div>
      <dt>{{ $t('ticker.priceEur') }}</dt>
      <dd>
        {{ tickerInfo && $n(tickerInfo.priceEur, 'currency-eur-detailed') }}
      </dd>
    </div>

    <div>
      <dt>{{ $t('ticker.marketCapEur') }}</dt>
      <dd>{{ tickerInfo && $n(tickerInfo.marketCapEur, 'currency-eur-no-fractions') }}</dd>
    </div>

    <div>
      <dt>{{ $t('ticker.dayVolumeEur') }}</dt>
      <dd>
        {{ tickerInfo && $n(tickerInfo.dayVolumeEur, 'currency-eur') }}
      </dd>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import TickerMixin, { TickerInfo } from '~/components/mixins/TickerMixin'

@Component
class FrontpageTicker extends Mixins(TickerMixin) {
  tickerInfo: TickerInfo | null = null

  mounted () {
    this.loadTickerInfo()
  }

  async loadTickerInfo () {
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

  @include media-breakpoint-down(sm) {
    flex-direction: column;

    dd, dt {
      display: inline-block;
      width: 49%;
    }

    dd {
      text-align: right;
    }
  }
}
</style>
