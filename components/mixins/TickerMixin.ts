import axios from 'axios'
import { Component, Vue } from 'vue-property-decorator'

export const TICKER_URL = 'https://a1.efl.nl/efl/s_poll2.php'

export interface TickerInfo {
  symbol: string
  priceBtc: number
  priceEur: number
  marketCapEur: number
  dayVolumeEur: number
}

@Component
class TickerMixin extends Vue {
  public async getTickerInfo (): Promise<TickerInfo> {
    try {
      const response = await axios.get(TICKER_URL)
      const data = response.data

      return {
        symbol: 'EFL',
        priceBtc: data.elfprijs_btc,
        priceEur: data.elfprijs_eu,
        marketCapEur: data.eur_market_cap,
        dayVolumeEur: data.eur_24h_vol
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)

      return {
        symbol: 'EFL',
        priceBtc: 0,
        priceEur: 0,
        marketCapEur: 0,
        dayVolumeEur: 0
      }
    }
  }
}

export default TickerMixin
