import axios from 'axios'
import { Component, Vue } from 'vue-property-decorator'

export const TICKER_URL = 'https://api.coinmarketcap.com/v1/ticker/e-gulden/?convert=EUR'

export interface TickerInfo {
  symbol: string
  price_btc: number
  price_eur: number
  market_cap_eur: number
  '24h_volume_eur': number
}

@Component
class TickerMixin extends Vue {
  async getTickerInfo() {
    const response = await axios.get(TICKER_URL)
    return <TickerInfo> response[0]
  }
}

export default TickerMixin
