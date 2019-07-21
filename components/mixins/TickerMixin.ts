import axios from 'axios'
import { Component, Vue } from 'vue-property-decorator'

export const TICKER_URL = 'https://85.214.137.225/efl/s_poll2.php'

export interface TickerInfo {
  symbol: string
  priceBtc: number
  priceEur: number
  marketCapEur: number
  dayVolumeEur: number
}

@Component
class TickerMixin extends Vue {
  public async getTickerInfo(): Promise<TickerInfo> {
    try {
      const response = await axios.get(TICKER_URL)
      const data = response.data

      return {
        symbol: 'EFL',
        priceBtc: data.elfprijs_btc,
        priceEur: data.elfprijs_eu,
        marketCapEur: 0,
        dayVolumeEur: 0
      }
    } catch (e) {
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
