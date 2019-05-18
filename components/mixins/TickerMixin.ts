import { Component, Vue } from 'vue-property-decorator'

export const TICKER_URL = 'https://api.coinmarketcap.com/v1/ticker/e-gulden/?convert=EUR'

export interface TickerInfo {
}

@Component
class TickerMixin extends Vue {

  async getTickerInfo() {
    const response = await this.$axios.$get(TICKER_URL)
    return <TickerInfo> response[0]
  }
}

export default TickerMixin
